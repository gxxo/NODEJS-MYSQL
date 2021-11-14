var mysql      = require('mysql');          //mysql 모듈을 사용하겠다
var connection = mysql.createConnection({   //mysql과 관련된 객체와 소속된 createConnection 메소드 호출
  host     : 'localhost',          
  user     : 'root',                  
  password : 'kgy0511',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();