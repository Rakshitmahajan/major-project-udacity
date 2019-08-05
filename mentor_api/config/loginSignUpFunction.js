const bcrypt = require('bcryptjs');
const db = require('./sqlConnection');

const jwt = require('jsonwebtoken');

const winston = require('./winston');

async function err_check(firstName, lastName, email, phoneNumber, password, password2) {
    if (!firstName || !email || !password || !password2 || !phoneNumber || !lastName) {
        return ('field required');
    }
    try {
        const [rows] = await db.query(`select * FROM mentor WHERE email = '${email}'`);
        if (rows[0] !== undefined) {
            return ('user already exist');
        }
    } catch (err) {
        winston.error(err.stack);
    }
    if (password !== password2) {
        return ('password do not match');
    }
    if (password.length < 5) {
        return ('password must be of minimum length 5')
    }
    if (phoneNumber.length !== 10) {
        return ('phone number not valid');
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        return ('enter valid email');
    }

    return ('ok');
}

async function signupMentor(req) {
    const { firstName, lastName, email, phoneNumber, password, password2 } = req;
    console.log(firstName, lastName, email, phoneNumber, password, password2 );
    const error = await err_check(firstName, lastName, email, phoneNumber, password, password2);
    if (error != 'ok') {
        return({
            err: {
                message: error
            },
            data: null
        })
    } else {

        const hash = await bcrypt.hashSync(password, 10);
        try {
            const result = await db.query(`INSERT INTO mentor (firstName, lastName, email, phoneNumber, password) VALUES ('${firstName}', '${lastName}','${email}','${phoneNumber}','${hash}')`);
            return({
                err: null,
                data: {
                    firstName,
                    lastName,
                    email,
                    phoneNumber
                }
            });
        } catch (err) {
            winston.error(err.stack);
        }
    };
}

async function loginMentor(req) {
    const { email, password } = req;
    if (!email || !password) {
        return ({
            err: {
                message: 'fields required'
            },
            data: null
        });
    } else {
        const [rows] = await db.query(`select * FROM mentor WHERE email = '${email}'`);
        if (rows[0] == undefined) {
            return ({
                err: {
                    message: 'user not found'
                },
                data: null
            });
        }
        if (bcrypt.compareSync(password, rows[0].password)) {
            const token = jwt.sign({
                email:rows[0].email,
                firstName: rows[0].firstName,
                phoneNumber:rows[0].phoneNumber
            }, 'thisissomesecreatkey')
            return ({
                err: null,
                data: {
                    firstName: rows[0].firstName,
                    lastName: rows[0].lastName,
                    email: rows[0].email,
                    phoneNumber: rows[0].phoneNumber
                },
                token:token
            });
        } else {
            return ({
                err: {
                    message: 'password not correct'
                },
                data: null
            });
        }
    }
}

module.exports = {
    loginMentor,
    signupMentor
}