const express = require('express');
// var router = express.Router(); 
var burger = require('../models/burgers.js');

module.exports = function(app) {
    
    app.get('/', function(request, response) {
        connection.query(`SELECT * FROM burgers`, function(error, results) {
            if (error) throw error;
            console.log(results);    
        });
        response.send(results);
        

    });

    app.post("/", function(request, response) {
        response.send(`Something Added!!`);
  
    });

    app.put("/", function(request, response) {
        response.send(`Something Updated!!`);
    });
};