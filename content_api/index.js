const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({
  path: '../.env',
});
// mongoose.connect('mongodb://admin:admin123@ds123796.mlab.com:23796/udacity', { useNewUrlParser: true })
mongoose.connect("mongodb://localhost:27017/udacity")
  .then(() => console.log('connected'))
  .catch((err) => console.log('not connected', err));

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/code', require('./routes/Code'));
app.use('/comment', require('./routes/Comment'));
app.use('/list', require('./routes/List'));
app.use('/quiz', require('./routes/Quiz'));
app.use('/text', require('./routes/Text'));
app.use('/concept', require('./routes/Concept'));
app.listen(process.env.CONTENT_PORT, () => console.log('Lesson Content API Running on', process.env.CONTENT_PORT));

module.exports = app;