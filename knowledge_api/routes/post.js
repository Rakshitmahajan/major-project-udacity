const express = require('express');
const pool = require('../config/PostCrudOperation');

const app = express.Router();

app.get('/', async (req, res) => {
  const result = await pool.readPost();
  res.json(result);
})
app.get('/mypost/:id', async (req, res) => {
  const result = await pool.readMyPost(req.params.id);
  res.json(result);
})

app.get('/detail/:id', async (req, res) => {
  const result = await pool.readPostDetail(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createPost(req.body);
  res.json(result);
})
app.put('/upvotes', async (req, res) => {
  const result = await pool.updateUpvotes(req.body);
  res.json(result);
})
app.put('/addanswer', async (req, res) => {
  const result = await pool.addAnswer(req.body);
  res.json(result);
})
module.exports = app;