/* eslint-disable prefer-destructuring */
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.LESSON_HOST,
  user: process.env.LESSON_USER,
  password: process.env.LESSON_PD,
  database: process.env.LESSON_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const readLesson = async (courseId) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query('SELECT * from Lesson WHERE courseId=?', [courseId]);
    obj.data = result[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readRowLesson = async (lessonId) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query(`SELECT * from Lesson WHERE lessonId=?`, [lessonId]);
    obj.data = result[0][0];
  } catch (err) {
    // winston.log(err);
    obj.error = err;
  }
  return obj;
}
const createRowLesson = async (data) => {
  const obj = { error: null, data: null };
  try {
    if (data.lessonId === '' || data.lessonTitle === '' || data.lessonType === '' || data.lessonCategory === '') {
      throw 'Enter the values';
    }
    await pool.query(`INSERT INTO Lesson SET lessonId=?,lessonNumber=?,lessonTitle=?,lessonDescp=?,lessonImage=?,courseId=?`, [data.lessonId, data.lessonNumber, data.lessonTitle, data.lessonDescp, data.lessonImage, data.courseId])
    const result = await readRowLesson(data.lessonId);
    obj.data = result.data;
  } catch (err) {
    // winston.log(err);
    obj.error = { message: err }
  }
  return obj;
}
const updateRowLesson = async (data) => {
  const obj = { error: null, data: null };
  try {
    if (data.lessonNumber === '' || data.lessonTitle === '' || data.lessonDescp === '' || data.lessonImage === '') {
      throw 'Enter the values';
    }
    await pool.query(`UPDATE Lesson SET lessonNumber=?,lessonTitle=?,lessonDescp=?,lessonImage=? WHERE lessonId=?`, [data.lessonNumber, data.lessonTitle, data.lessonDescp, data.lessonImage, data.lessonId])
    const result = await readRowLesson(data.lessonId);
    obj.data = result.data;
  } catch (err) {
    // winston.log(err);
    obj.error = { message: err }
  }
  return obj;
}
const deleteRowLesson = async (lessonId) => {
  const obj = { error: null, data: null };
  try {
    const result = await pool.query(`DELETE from Lesson WHERE lessonId =?`, [lessonId])
    obj.data = result[0];
  } catch (err) {
    // winston.log(err);
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readLesson,
  readRowLesson,
  createRowLesson,
  updateRowLesson,
  deleteRowLesson
}