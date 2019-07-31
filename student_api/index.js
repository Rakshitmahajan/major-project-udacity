const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({
    path: '../.env',
});

const morgan = require('morgan');

const winston = require('./config/winston');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(require('./routes/studentLogin'));
app.use(require('./routes/studentSignup'));

app.listen(process.env.STUDENT_PORT, () => winston.log('info', `STUDENT API Magic happens on port ${process.env.STUDENT_PORT}`));

module.exports = app;