const express = require('express');
const pool = require('../config/CommentCrudOperation');

const app = express.Router();

app.get('/:id', async (req, res) => {
  const result = await pool.readComment(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createComment(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateComment(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteComment(req.body);
  res.json(result);
})
module.exports = app;