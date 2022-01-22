const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'UMz9M9(gR/CUQzod',
    database: 'node_login'
});

module.exports = dbConnection.promise();