/* eslint-disable prefer-destructuring */
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: process.env.USER_COURSE_HOST,
  user: process.env.USER_COURSE_USER,
  password: process.env.USER_COURSE_PD,
  database: process.env.USER_COURSE_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const readCode = async (data) => {
  const obj = { error: null, data: null };
  console.log(data.code);
  try {
    if (!data.id) throw 'Enter data';
    const codeData = await pool.query('SELECT code form Code WHERE id=?', [data.id]);
    console.log('csc', codeData);
    obj.data = codeData;
  } catch (err) {
    console.log(err);
    obj.error = err;
  }
  return obj;
}
const createCode = async (data) => {

}
const updateCode = async (data) => {

}
const deleteCode = async (data) => {

}
module.exports = {
  readCode,
  createCode,
  updateCode,
  deleteCode
}