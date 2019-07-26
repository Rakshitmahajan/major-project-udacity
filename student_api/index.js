const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const morgan = require('morgan');

const winston = require('./config/winston');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(require('./routes/studentLogin'));
app.use(require('./routes/studentSignup'));

const port = 5100;

app.listen(port, () => winston.log('info', `Magic happens on port ${port}`));

module.exports = app;