// connect with mysql
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', //no password is set so it is empty
    database: 'college' //database name,if not exist it will create
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
db.query("SELECT * FROM student_details", function (err, result) {
    if (err) throw err;
    console.log(result);
});