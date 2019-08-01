/* eslint-disable prefer-destructuring */
const mysql = require('mysql2/promise');

const winston = require('./winston');

const pool = mysql.createPool({
    host: process.env.COURSE_HOST,
    user: process.env.COURSE_USER,
    password: process.env.COURSE_PD,
    database: process.env.COURSE_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
const readCourse = async () => {
    const obj = { error: null, data: null };
    try {
        const result = await pool.query('SELECT * from Course');
        obj.data = result[0];
    } catch (err) {
        obj.error = { message: err }
    }
    return obj;
}
const readRowCourse = async (courseId) => {
    const obj = { error: null, data: null };
    try {
        const result = await pool.query(`SELECT * from Course WHERE courseId=?`, [courseId]);
        if (result[0][0] === undefined) {
            throw 'Yet to be added..';
        } else obj.data = result[0][0];
    } catch (err) {
        winston.error(err.stack);
        obj.error = { message: err }
    }
    return obj;
}
const createRowCourse = async (data) => {
    const obj = { error: null, data: null };
    try {
        if (data.courseId === '' || data.courseTitle === '' || data.courseType === '' || data.courseCategory === '') {
            throw 'Enter the values';
        }
        await pool.query(`INSERT INTO Course SET courseId=?,courseTitle=?,courseDescp=?,courseType=?,courseCategory=?`, [data.courseId, data.courseTitle, data.courseDescp, data.courseType, data.courseCategory]);
        const result = await readRowCourse(data.courseId);
        obj.data = result.data;
    } catch (err) {
        winston.error(err.stack);
        obj.error = { message: err }
    }
    return obj;
}
const updateRowCourse = async (courseId, data) => {
    const obj = { error: null, data: null };
    try {
        if (data.courseTitle === '' || data.courseDescp === '') {
            throw 'Enter the values';
        }
        const rst = await pool.query(`UPDATE Course SET courseTitle=?,courseDescp=? WHERE courseId=?`, [data.courseTitle, data.courseDescp, courseId])
        if (rst[0].affectedRows) {
            const result = await readRowCourse(courseId);
            obj.data = result.data;
        } else {
            throw 'does not exit';
        }

    } catch (err) {
        winston.error(err.stack);
        obj.error = { message: err }
    }
    return obj;
}
const deleteRowCourse = async (courseId) => {
    const obj = { error: null, data: null };
    fetch(`http://10.10.5.192:8081/user/`, {
        method: 'delete',
        body: courseId,
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(Response => Response.json())
        .then((res) => {
            fetch(`http://10.10.5.192:3031/lesson/course/${courseId}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(Response => Response.json())
                .then((res) => {
                    console.log(res)
                    try {
                        const result = await pool.query(`DELETE from Course WHERE courseId =?`, [courseId]);
                        if (result[0].affectedRows) {
                            obj.data = { message: `${courseId} deleted` };
                        } else {
                            throw 'Yet to be added..';
                        }
                    } catch (err) {
                        winston.error(err.stack);
                        obj.error = { message: err }
                    }
                })
        })
    return obj;
}
module.exports = {
    readCourse,
    readRowCourse,
    createRowCourse,
    updateRowCourse,
    deleteRowCourse
}