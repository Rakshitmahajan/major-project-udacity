const express = require('express');
const pool = require('../config/AnswerCrudOperation');

const app = express.Router();

app.get('/', async (req, res) => {
  const result = await pool.readAnswer();
  res.json(result);
})
app.get('/myanswer/:id', async (req, res) => {
  const result = await pool.readMyAnswer(req.params.id);
  res.json(result);
})

app.get('/detail/:id', async (req, res) => {
  const result = await pool.readAnswerDetail(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createAnswer(req.body);
  res.json(result);
})
app.put('/upvotes', async (req, res) => {
  const result = await pool.updateUpvotes(req.body);
  res.json(result);
})

module.exports = app;