// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our model controllers
// TODO: Figure out how we can use an index.js like sequelize does for models...
// var control = require("../controllers");
var user = require("../controllers/user");

// Routes
// =============================================================
module.exports = function(app) {

    //#region User Functions
    // POST route for saving a new user
    app.post("/api/signup", function(req, res) {
        // console.log(req.body[0]);
        // findAll returns all entries for a table when used with no options
        user.addUser(req.body[0]).then(function(dbuser) {
            // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });

    // POST route for saving a new user
    app.post("/api/login", function(req, res) {
        console.log(req.body[0]);
        // login returns user info if they submit the credentials.
        user.login(req.body[0].userName, req.body[0].passKey, ).then(function(dbuser) {
            // console.log(dbuser)
            // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });

    // GET route for retrieving all users
    app.get("/api/user", function(req, res) {
        // findAll returns all entries for a table when used with no options
        user.findAll({}).then(function(dbuser) {
            // console.log(dbuser)
            // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });

    // GET route for retrieving user by username
    app.get("/api/user/:username", function(req, res) {
        // findAll returns all entries for a table when used with no options
        user.findUserName(req.params.username).then(function(dbuser) {
            // console.log(dbuser)
            // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });


    //#endregion User Functions

    //#region added by Kush
    // var db = require("../models");

    // module.exports = function(app) {

    app.get("/api/all", function(req, res) {
        db.findAll({})
            .then(function() {
                res.json();
            });
    });

    app.get("/api/cocktail/:cocktail", function(req, res) {
        db.findAll({
                where: {
                    cocktail: req.params.cocktail
                }
            })
            .then(function() {
                res.json();
            });
    });
    app.get("/api/ingredients/:ingredients", function(req, res) {
        db.findAll({
                where: {
                    ingredients: req.params.ingredients
                }
            })
            .then(function() {
                res.json();
            });
    });
    // app.get("/api/username/:username", function(req, res) {
    //     db.findAll({
    //             where: {
    //                 username: req.params.username
    //             }
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });

    // app.get("/api/friendname/:friendname", function(req, res) {
    //     db.findAll({
    //             where: {
    //                 friendname: req.params.friendname
    //             }
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });

    // app.post("/api/signup", function(req, res) {
    //     console.log(req.body);
    //     db.create({
    //             name: req.body.name,
    //             email: req.body.email,
    //             username: req.body.username,
    //             password: req.body.password,
    //             repassword: req.body.repassword,
    //             birthdate: req.body.birthdate,
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });

    // app.post("/api/login", function(req, res) {
    //     console.log(req.body);
    //     db.create({
    //             username: req.body.username,
    //             password: req.body.password,
    //             repassword: req.body.repassword,
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });
    app.post("/api/cocktail", function(req, res) {
        console.log(req.body);
        db.create({
                cocktail: req.body.cocktail,
                ingredients: req.body.ingredients,
                location: req.body.location,
            })
            .then(function() {
                res.json();
            });
    });
    app.post("/api/review", function(req, res) {
        console.log(req.body);
        db.create({
                review: req.body.review,
                ratings: req.body.ratings
            })
            .then(function() {
                res.json();
            });
    });
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        db.create({
                friendname: req.body.friendname,

            })
            .then(function() {
                res.json();
            });
    });

    app.put("/api/username", function(req, res) {
        db.update(req.body, {
                where: {
                    username: req.body.username
                }
            })
            .then(function() {
                res.json();
            });
    });
    app.put("/api/review", function(req, res) {
        db.update(req.body, {
                where: {
                    review: req.body.review
                }
            })
            .then(function() {
                res.json();
            });
    });
    app.put("/api/cocktail", function(req, res) {
        db.update(req.body, {
                where: {
                    cocktail: req.body.cocktail
                }
            })
            .then(function() {
                res.json();
            });
    });

    // };
    //#endregion


};