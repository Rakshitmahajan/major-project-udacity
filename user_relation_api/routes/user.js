const express = require('express');
const sql = require('../config/crudOperation.js');

const app = express.Router();
// app.get('/table/', async (req, res) => {
//   const result = await sql.readCourse(req.params.courseId);
//   res.json(result);
// })
app.get('/:userEmail', async (req, res) => {
  const result = await sql.readRelation(req.params.userEmail);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await sql.createRelation(req.body);
  res.json(result);
})
app.put('/:userEmail', async (req, res) => {
  const result = await sql.updateRelation();
  res.json(result);
})
app.delete('/:userEmail', async (req, res) => {
  const result = await sql.deleteRelation()
  res.json(result);
})
module.exports = app;