const express = require('express');
const pool = require('../config/ListCrudOperation');

const app = express.Router();

app.get('/:id', async (req, res) => {
  const result = await pool.readList(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createList(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateList(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteList(req.body);
  res.json(result);
})
module.exports = app;