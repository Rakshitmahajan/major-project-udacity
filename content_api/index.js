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
app.use('/code', require('./routes/Code'));
app.use('/comment', require('./routes/Comment'));
app.use('/list', require('./routes/List'));
app.use('/quiz', require('./routes/Quiz'));
app.use('/text', require('./routes/Text'));

app.listen(process.env.CONTENT_PORT, () => console.log('Lesson Content API Running on', process.env.CONTENT_PORT));

module.exports = app;