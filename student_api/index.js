const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/studentLogin'));
app.use(require('./routes/studentSignup'));

const port = 5000;

app.listen(port);

module.exports = app;