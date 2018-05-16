// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our model controllers
// TODO: Figure out how we can use an index.js like sequelize does for models...
// var control = require("../controllers");
var drink = require("../controllers/drink");
var user = require("../controllers/user");

// Routes
// =============================================================
module.exports = function(app) {

    //#region Category Functions
    //TODO: //Find all categories
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //#endregion Category Functions  

    //#region Drink Functions

    //  find drink
    app.get("/api/drink/:drink", function(req, res) {
        drink.findDrink(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    // add drink
    app.post("/api/drink", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        drink.addDrink(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    // //TODO: Convert to Controller     // update drink
    // app.put("/api/drink", function(req, res) {
    //     db.update(req.body, {
    //             where: {
    //                 drink: req.body.drink
    //             }
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    //#endregion Drink Functions

    //#region Friend Functions
    //TODO: // Find all Friends by user
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Remove Friend
    app.delete("/api/model/:id", function(req, res) {

        model.Remove(req.params.id)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });

    });

    //TODO: // Find all pending friend requests
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Accept Friend
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: Convert to Controller     // Add Friend
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

    //#region Ingredient Functions
    //TODO: // Add ingredient
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Find All ingredients
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Retire ingredient
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    //TODO: Convert to Controller     // Find ingredient by name
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

    //#region Part (drink ingredients) Functions
    //TODO: // Add drink part
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    //TODO: // update drink part
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    //#endregion Part Functions  

    //#region Place Functions
    //TODO: // Add place
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    //TODO: // Update place
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    //TODO: // Mark Closed
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    //#endregion Place Functions  

    //#region Review Functions

    //TODO: //FindReviews by user
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: //FindReviews by drink
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: //FindReviews by location
    app.get("/api/model/:model", function(req, res) {
        model.findModel(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: Convert to Controller    //Add Review
    app.post("/api/review", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        review.addReview(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    // app.post("/api/review", function(req, res) {
    //     console.log(req.body);
    //     db.create({
    //             review: req.body.review,
    //             ratings: req.body.ratings
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });

    //TODO: Convert to Controller     //Edit Review
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });
    // app.put("/api/review", function(req, res) {
    //     db.update(req.body, {
    //             where: {
    //                 review: req.body.review
    //             }
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });
    //#endregion Review Functions    

    //#region User Functions
    // POST route for saving a new user
    app.post("/api/signup", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        user.addUser(req.body[0]).then(function(dbResults) {
            // We have access to the user as an argument inside of the callback function
            res.json(dbResults);
        });
    });

    // POST route for saving a new user
    app.post("/api/login", function(req, res) {
        // console.log(req.body[0]);
        // login returns user info if they submit the credentials.
        user.login(req.body[0].userName, req.body[0].passKey, ).then(function(dbResults) {
            // console.log(dbResults)
            // We have access to the user as an argument inside of the callback function
            res.json(dbResults);
        });
    });

    // GET route for retrieving all users
    app.get("/api/user", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        user.findAll({}).then(function(dbResults) {
            // console.log(dbResults)
            // We have access to the user as an argument inside of the callback function
            res.json(dbResults);
        });
    });

    // GET route for retrieving user by username
    app.get("/api/user/:username", function(req, res) {
        //Find all returns all entries for a table when used with no options
        user.findUserName(req.params.username).then(function(dbResults) {
            // console.log(dbResults)
            // We have access to the user as an argument inside of the callback function
            res.json(dbResults);
        });
    });

    // //TODO: Convert to Controller  // Update Username
    console.log(req.body[0]);
    //Find all returns all entries for a table when used with no options
    model.updateModel(req.body[0])
        .then(function(dbResults) {
            // We have access to the results as an argument inside of the callback function
            res.json(dbResults);
        });

    // app.put("/api/username", function(req, res) {
    //     db.update(req.body, {
    //             where: {
    //                 username: req.body.username
    //             }
    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });
    //#endregion User Functions

    //#region Vote Functions
    //TODO: // Add Upvote
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    //TODO: // Add Downvote
    app.post("/api/model", function(req, res) {
        console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        model.addModel(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    //TODO: // Remove vote
    app.delete("/api/model/:id", function(req, res) {

        model.Remove(req.params.id)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });

    });
    //#endregion Vote Functions    



};