const express = require('express');
const pool = require('../config/CodeCrudOperation');

const app = express.Router();

app.get('/', async (req, res) => {
  const result = await pool.readCode(req.body);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createCode(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateCode(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteCode(req.body);
  res.json(result);
})
module.exports = app;