const express = require('express');
const pool = require('../config/UserCrudOperation');

const app = express.Router();

app.get('/:id', async (req, res) => {
  const result = await pool.readUser(req.params.id);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createUser(req.body);
  res.json(result);
})
app.put('/upvotesReceived', async (req, res) => {
  const result = await pool.updateUpVotesReceived(req.body);
  res.json(result);
})
app.put('/upvotesGiven', async (req, res) => {
  const result = await pool.updateUpVotesGiven(req.body);
  res.json(result);
})
app.put('/answerPost', async (req, res) => {
  const result = await pool.updateAnswerPost(req.body);
  res.json(result);
})
app.put('/answerAccepted', async (req, res) => {
  const result = await pool.updateAnswerAccepted(req.body);
  res.json(result);
})
app.delete('/:id', async (req, res) => {
  const result = await pool.deleteUser(req.params.id);
  res.json(result);
})
module.exports = app;