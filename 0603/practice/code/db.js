var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0906',
    database: 'testDB'
});
db.connect();

module.exports = db;