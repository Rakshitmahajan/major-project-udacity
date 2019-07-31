const express = require('express');
const pool = require('../config/QuizCrudOperation');

const app = express.Router();

app.get('/:id', async (req, res) => {
  const result = await pool.readQuiz(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createQuiz(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateQuiz(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteQuiz(req.body);
  res.json(result);
})
module.exports = app;