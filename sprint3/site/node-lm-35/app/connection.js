var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dragao007',
    database : 'iParking'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;
