// Require npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require("express-handlebars");

// Create app for express
const app = express();

// Call out port to use with Express
const PORT = process.env.PORT || 3000;

// Call out body-parse elements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Call out Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Cal out Method Override
app.use(methodOverride('_method'));

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'burger_db'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});


// Use Handlebars to render the main index.html page with the movies in it.
app.get('/', function(req, res) {
	connection.query('SELECT * FROM burgers;', function(err, data) {
		if (err) {
			return res.status(500).end();
		}

		res.render('index', {burgers: data});
	});
});

// Requesting routes in from external file
// require("./controllers/burgers_controllers")(app);


// Start Server
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT)
})