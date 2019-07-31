const express = require('express');
const pool = require('../config/TextCrudOperation');

const app = express.Router();

app.get('/:id', async (req, res) => {
  const result = await pool.readText(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createText(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateText(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteText(req.body);
  res.json(result);
})
module.exports = app;