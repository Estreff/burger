const express = require('express');
var router = express.Router(); 
var sandwich = require('../models/burgers.js');
    
    router.get('/order', function(request, response) {
        sandwich.selectAll(function(data) {
            var hbsObject = {
                burgers: data
              };
            response.render('index', hbsObject);
        });
    });    

    router.post('/sandwich', function(request, response) {
        console.log(request.body);
        sandwich.insertOne([
            'burger_name'
        ],[
            request.body.sandwich_name
        ], function(data) {
                console.log({ id: data.insertId });
        });
        response.redirect('/order');
  
    });

    router.put('/sandwich/:id', function(request, response) {
        var condition = 'id = ' + request.params.id;
        sandwich.updateOne({
            devoured: true
          }, condition, function(data) {
        });  
        response.redirect('/order');     
    });


    module.exports = router;