const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: '3306',
    database: 'udacity_project',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = db;