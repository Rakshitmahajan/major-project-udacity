const appRoot = require('app-root-path');
const winston = require('winston');


const options = {
    file: {
        level: 'debug',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        eol: '\n',
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
    },
};
