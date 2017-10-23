var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
    
      for (var key in ob) {
          arr.push(key + "=" + ob[key]);
      }
        return arr.toString();
    }


var orm = {

    selectAll: function(table, callback) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(error, results) {
            if (error) {
                return results.status(500).end();
            }   
            callback(results);
        });

    },

    insertOne: function(tables, columns, values, callback) {
        var queryString = "INSERT INTO " + tables;
    
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, values, function(error, results) {
            if (error) {
                return results.status(500).end();
            }   
            callback(results);
        });
      },

    updateOne: function(table, values, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(values);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log('UPDATE queryString: ', queryString);
        connection.query(queryString, function(error, result) {
          if (error) {
            throw error;
          }
    
          callback(result);
        });        
    }
};

module.exports = orm;
