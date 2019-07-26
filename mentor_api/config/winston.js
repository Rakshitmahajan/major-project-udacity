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


const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});


logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
