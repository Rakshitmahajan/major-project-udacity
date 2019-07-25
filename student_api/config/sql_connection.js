const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rakshit@1998',
    port: '3306',
    database: 'major-project-udacity',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = db;