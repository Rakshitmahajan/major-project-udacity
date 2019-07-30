/* eslint-disable prefer-destructuring */
const mysql = require('mysql2/promise');

// const winston = require('./winston');

const pool = mysql.createPool({
  host: process.env.USER_COURSE_HOST,
  user: process.env.USER_COURSE_USER,
  password: process.env.USER_COURSE_PD,
  database: process.env.USER_COURSE_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const readRelation = async (userEmail) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query('SELECT * from UserCourse WHERE userEmail=?', [userEmail]);
    obj.data = result[0];
  } catch (err) {
    obj.error = { message: err }
  }
  return obj;
}
const readRowRelation = async (data) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query('SELECT * from UserCourse WHERE userEmail=? AND courseId=?', [data.userEmail, data.courseId]);
    obj.data = result[0];
  } catch (err) {
    obj.error = { message: err }
  }
  return obj;
}
const createRelation = async (data) => {
  const obj = { error: null, data: null };
  try {
    if (data.courseId === '' || data.userEmail === '') {
      throw 'Enter the values';
    }
    await pool.query(`INSERT INTO UserCourse SET courseId=?,userEmail=?`, [data.courseId, data.userEmail]);
    const result = await readRowRelation(data);
    obj.data = result.data[0];
  } catch (err) {
    // winston.error(err.stack);
    obj.error = { message: err }
  }
  return obj;
}
const updateRelation = async (courseId, data) => {
  const obj = { error: null, data: null };
  try {
    if (data.courseTitle === '' || data.courseDescp === '') {
      throw 'Enter the values';
    }
    const rst = await pool.query(`UPDATE UserCourse SET courseTitle=?,courseDescp=? WHERE courseId=?`, [data.courseTitle, data.courseDescp, courseId])
    if (rst[0].affectedRows) {
      const result = await readRowRelation(userEmail, courseId);
      obj.data = result.data;
    } else {
      throw 'does not exit';
    }

  } catch (err) {
    // winston.error(err.stack);
    obj.error = { message: err }
  }
  return obj;
}
const deleteRelation = async (data) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query(`DELETE from UserCourse WHERE courseId =? AND userEmail=?`, [data.courseId, data.userEmail]);
    if (result[0].affectedRows) {
      obj.data = { message: `${data.courseId} deleted` };
    } else {
      throw 'Yet to be added..';
    }
  } catch (err) {
    // winston.error(err.stack);
    obj.error = { message: err }
  }
  return obj;
}
module.exports = {
  readRelation,
  createRelation,
  updateRelation,
  deleteRelation
}