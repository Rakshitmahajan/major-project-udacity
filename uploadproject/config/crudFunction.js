const db = require('./sqlConnection');

async function insertProject(title_project, email_project) {
    const title = title_project;
    const email = email_project;
    console.log(title);
    if (!title) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        })
    }
    const [rows] = await db.query(`select title FROM project WHERE title = '${title}'`);
    if (rows[0] !== undefined) {
        return ({
            err: {
                message: 'already exist',
            },
            data: null,
        });
    }
    try {
        await db.query(`INSERT INTO project(title, email) VALUES ('${title}', '${email}')`);
        return ({
            err: null,
            data: {
                title: title,
                email: email,

            }
        })
    } catch (err) {
        return err;
    }
}

async function readProject() {

    try {
        const [rows] = await db.query('select * FROM project');
        if (rows[0] == undefined) {
            return ({
                err: {
                    message: 'projects not found',
                },
                data: null,
            });
        } else {
            // console.log(rows);
            return (rows)
        }
    } catch (err) {
        return err;
    }
}




module.exports = {
    insertProject,
    readProject,

};