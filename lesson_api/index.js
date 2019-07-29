const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({
  path: '../.env',
});
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/lesson', require('./routes/lesson'));

app.listen(process.env.LESSON_PORT, () => console.log('Lesson API Running on', process.env.LESSON_PORT));

module.exports = app;