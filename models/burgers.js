var orm = require("../config/orm.js");


var sandwich = {
    selectAll: function(callback) {
        orm.selectAll('burgers', function(response) {
            callback(response);
        })
    },

    insertOne: function(columns, values, callback) {
        orm.insertOne('burgers', columns, values, function(response) {
            callback(response);
        })

    },

    updateOne:function(values, condition, callback) {
        orm.updateOne('burgers', values, condition, function(response) {
            callback(response);
        });
    }
};

module.exports = sandwich;