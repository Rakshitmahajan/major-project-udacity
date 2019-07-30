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

app.use('/user', require('./routes/user'));
// app.use('/mentor', require('./routes/mentor'));

app.listen(process.env.RELATION_PORT, () => console.log('User Relation API Running on', process.env.RELATION_PORT));

module.exports = app;