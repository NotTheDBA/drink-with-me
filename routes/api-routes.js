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
        // console.log(req.body[0]);
        // login returns user info if they submit the credentials.
        user.login(req.body[0].userName, req.body[0].passKey, ).then(function(dbuser) {
            // console.log(dbuser)
            // We have access to the user as an argument inside of the callback function
            res.json(dbuser);
        });
    });

    // GET route for retrieving all users
    app.get("/api/user", function(req, res) {
        // console.log(req.body[0]);
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

    //TODO: Convert to Controller
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
    //#endregion User Functions

    //#region Drink Functions

    //TODO: Convert to Controller
    //  find drink
    app.get("/api/drink/:drink", function(req, res) {
        db.findAll({
                where: {
                    drink: req.params.drink
                }
            })
            .then(function() {
                res.json();
            });
    });
    //TODO: Convert to Controller
    // add drink
    app.post("/api/drink", function(req, res) {
        console.log(req.body);
        db.create({
                drink: req.body.drink,
                ingredients: req.body.ingredients,
                location: req.body.location,
            })
            .then(function() {
                res.json();
            });
    });
    //TODO: Convert to Controller
    // update drink
    app.put("/api/drink", function(req, res) {
        db.update(req.body, {
                where: {
                    drink: req.body.drink
                }
            })
            .then(function() {
                res.json();
            });
    });
    //#endregion Drink Functions

    //#region Ingredient Functions
    //TODO: Convert to Controller
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
    //#endregion Ingredient Functions

    //#region Review Functions
    //#endregion Review Functions    

    //#region Friend Functions

    //TODO: Review and mabye convert to Controller
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

    //TODO: Convert to Controller
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        db.create({
                friendname: req.body.friendname,

            })
            .then(function() {
                res.json();
            });
    });
    //#endregion Friend Functions    

    //#region Vote Functions
    //#endregion Vote Functions    

    //#region Review Functions
    //#endregion Review Functions    

    //#region Review Functions
    //TODO: Convert to Controller
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

    //TODO: Convert to Controller
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
    //#endregion Review Functions    

};