const mysql = require('mysql2/promise');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'rakshit',
//     port: '3306',
//     database: 'major-project-udacity',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

const db = mysql.createPool({
    host: 'bookland.co0tkvz2s505.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    port: '3306',
    database: 'major-project-udacity',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = db;