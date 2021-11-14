var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kgy0511',
    database : 'opentutorials'
  });
  db.connect();
  module.exports = db;