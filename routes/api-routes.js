// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our model controllers
// var con = require("../controllers");
var user = require("../controllers/user");

// Routes
// =============================================================
module.exports = function(app) {

    // POST route for saving a new user
    app.get("/api/user", function(req, res) {

        // findAll returns all entries for a table when used with no options
        user.findAll({}).then(function(dbuser) {
            console.log(dbuser)
                // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });

    // // POST route for saving a new user
    // app.post("/api/user", function(req, res) {
    //     // findAll returns all entries for a table when used with no options
    //     user.addUser({}).then(function(dbuser) {
    //         // We have access to the user as an argument inside of the callback function
    //         res.json(dbuser);
    //     });
    // });
};