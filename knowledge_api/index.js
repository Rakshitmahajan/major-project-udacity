const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({
  path: '../.env',
});

mongoose.connect("mongodb://localhost:27017/knwoledge")
  .then(() => console.log('connected'))
  .catch((err) => console.log('not connected', err));

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', require('./routes/user'));
app.use('/post', require('./routes/post'));
// app.use('/comment', require('./routes/Comment'));
app.use('/answer', require('./routes/answer'));
app.listen(process.env.KNOWLEDGE_PORT, () => console.log('Lesson KNOWLEDGE API Running on', process.env.KNOWLEDGE_PORT));

module.exports = app;