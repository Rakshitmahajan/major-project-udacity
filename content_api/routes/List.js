const express = require('express');
const pool = require('../config/CodeCrudOperation');

const app = express.Router();
// app.get('/table/', async (req, res) => {
//   const result = await sql.readCourse(req.params.courseId);
//   res.json(result);
// })
app.get('/', async (req, res) => {
  const result = await pool.readCode();
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createCode();
  res.json(result);
})
// app.put('/:userEmail', async (req, res) => {
//   const result = await pool.updateRelation();
//   res.json(result);
// })
app.delete('/', async (req, res) => {
  const result = await pool.deleteCode();
  res.json(result);
})
module.exports = app;