const mysql = require('mysql');

// create mysql connection
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'burger_db'
});

// Connect to the mySQL database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
});

// Export connection to ORM
module.exports = connection;