const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/insert'));
app.use(require('./routes/delete'));
app.use(require('./routes/update'));
app.use(require('./routes/read'));

const port = 5000;

app.listen(port);

module.exports = app;