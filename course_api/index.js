const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const morgan = require('morgan');

const winston = require('./config/winston');

dotenv.config({
    path: '../.env',
});
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(morgan('combined', { stream: winston.stream }));

app.use('/course', require('./routes/course'));

// app.listen(process.env.COURSE_PORT, () => console.log('Running on', process.env.COURSE_PORT));
app.listen(8000, () => winston.info('Running on', 8000));
module.exports = app;
