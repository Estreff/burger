const mysql = require('mysql');
const connection;
// create mysql connection

if (process.env.JAWSDB-URL) {
	connection = mysql.createConnection(process.env.JAWSDB-URL);
} else 
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burger_db'
});
}

// Connect to the mySQL database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
});

// Export connection to ORM
module.exports = connection;