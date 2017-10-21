var connection = require("./connection.js");

var orm = {

    function selectAll() {
        connection.query(`SELECT * FROM burgers`, function(error, results) {
            if (error) throw error;
            console.log(results);    
        });
    }

    function insertOne() {
        connection.query(`INSERT INTO burgers_db.burgers SET ?`, function(error, results) {
            if (error) throw error;
            
        });
    }

    function updateOne() {
        connection.query(`UPDATE products SET ? WHERE ?`,
        [{devoured:  true
        },
            {id: 1
        }], function (error, results, fields) {
            if (error) throw error; 
            console.log(`you have devoured a ${results.burger_name}`);
        });
    }

}

module.exports = orm;