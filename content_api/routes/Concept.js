const express = require('express');
const pool = require('../config/ConceptCrudOperation');
const fetch = require('node-fetch');
const app = express.Router();
fun = async (data) => {
  const result = await fetch(`http://localhost:5000/${data.type}/${data.id}`)
    .then(res => res.json())
    .then(resp => {
      // let data2 = resp.data
      // console.log('function ', resp);
      return resp;
    });
  return result;
}
app.get('/', async (req, res) => {
  const result = await pool.readConcept(req.body);
  res.json(result);
})
app.get('/title/:courseId/:lessonId', async (req, res) => {
  const result = await pool.readConceptTitle(req.params.courseId, req.params.lessonId);
  res.json(result);
})
app.get('/:courseId/:lessonId/:title', async (req, res) => {
  const result = await pool.readConceptData(req.params.courseId, req.params.lessonId, req.params.title);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await pool.createConcept(req.body);
  res.json(result);
})
app.put('/', async (req, res) => {
  const result = await pool.updateConcept(req.body);
  res.json(result);
})
app.delete('/', async (req, res) => {
  const result = await pool.deleteConcept(req.body);
  res.json(result);
})
module.exports = app;