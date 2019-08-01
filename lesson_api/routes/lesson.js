const express = require('express');
const sql = require('../config/crudOperation.js');

const app = express.Router();
app.get('/table/:courseId', async (req, res) => {
    const result = await sql.readLesson(req.params.courseId);
    res.json(result);
})
app.get('/:lessonId', async (req, res) => {
    const result = await sql.readRowLesson(req.params.lessonId);
    res.json(result);
})
app.post('/', async (req, res) => {
    const result = await sql.createRowLesson(req.body);
    res.json(result);
})
app.put('/:lessonId', async (req, res) => {
    const result = await sql.updateRowLesson(req.params.lessonId);
    res.json(result);
})
app.delete('/:lessonId', async (req, res) => {
    const result = await sql.deleteRowLesson(req.params.lessonId);
    res.json(result);
})
app.delete('course/:courseId', async (req, res) => {
    const result = await sql.deleteRowLessonFromCourse(req.params.courseId);
    res.json(result);
})
module.exports = app;