const express = require('express');
const sql = require('../config/crudOperation.js');

const app = express.Router();
app.get('/table', async (req, res) => {
    const result = await sql.readCourse();
    res.json(result);
})
app.get('/:courseId', async (req, res) => {
  
    const result = await sql.readRowCourse(req.params.courseId);
    res.json(result);
})
app.post('/', async (req, res) => {
    console.log('post');
    const result = await sql.createRowCourse(req.body);
    res.json(result);
});
app.put('/:courseId', async (req, res) => {
    const result = await sql.updateRowCourse(req.params.courseId, req.body);
    res.json(result);
})
app.delete('/:courseId', async (req, res) => {
    const result = await sql.deleteRowCourse(req.params.courseId);
    res.json(result);
});
module.exports = app;