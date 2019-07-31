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

app.use('/uploads',express.static('uploads'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));

app.use(require('./routes/insert'));
app.use(require('./routes/delete'));
app.use(require('./routes/update'));
app.use(require('./routes/read'));

app.listen(process.env.IMAGE_PORT, () => winston.log('info', `Magic happens on port ${process.env.IMAGE_PORT}`));

module.exports = app;