const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({
  path: '../.env',
});
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/course', require('./routes/course'));

// app.listen(process.env.COURSE_PORT, () => console.log('Running on', process.env.COURSE_PORT));
app.listen(8000, () => console.log('Running on', 8000));
module.exports = app;
