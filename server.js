// Require npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require("express-handlebars");

// Create app for express
const app = express();

// Call out port to use with Express
var PORT = process.env.PORT || 3000;

// Call out body-parse elements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Call out Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Call out Method Override	
app.use(methodOverride('_method'));
// Call Out PUBLIC folder to use Assets
app.use(express.static(__dirname + '/public'));

// var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'burger_db'
// });

// connection.connect(function(err) {
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}

// 	console.log('connected as id ' + connection.threadId);
// });


// Use Handlebars to render the main index.html page with the movies in it.
// app.get('/order', function(req, res) {
// 	connection.query('SELECT * FROM burgers', function(err, data) {
// 		if (err) {
// 			return res.status(500).end();
// 		}

// 		res.render('index', {burgers: data});
// 	});
// });

// // Create a new sandwich
// app.post('/sandwich', function(req, res) {
// 	connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.burger_name], function(err, result) {
// 		if (err) {
// 			return res.status(500).end();
// 		}

// 		// Send back the ID of the new movie
// 		res.json({ id: result.insertId });
// 		console.log({ id: result.insertId });
// 	});
// });

// app.put('/sandwich/:id', function(request, response) {
//     connection.query(`UPDATE burgers SET devoured = true where id = ?`,
//     [request.params.id], function(error, result) {
//         if (error) {
//             // If an error occurred, send a generic server faliure
//             return response.status(500).end();
//         } else if (result.changedRows == 0) {
// 			// If no rows were changed, then the ID must not exist, so 404
// 			return response.status(404).end();
// 		} else {
// 			response.status(200).end();
// 		}
// 	});
// 	response.redirect('/order');
// });

// Requesting routes in from external file
var routes = require("./controllers/burgers_controllers");
app.use("/", routes);

// Start Server
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT)
})