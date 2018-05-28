// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
var authController = require('../controllers/authcontroller.js');

// Requiring our model controllers
// TBD: Figure out how we can use an index.js like sequelize does for models...
// var control = require("../controllers");

var category = require("../controllers/category");
var drink = require("../controllers/drink");
var friend = require("../controllers/friend");
var ingredient = require("../controllers/ingredient");
var part = require("../controllers/part");
var place = require("../controllers/place");
var user = require("../controllers/user");
var review = require("../controllers/review");

// var express = require('express');
// var app = express();
// var request = require("request");


module.exports = function(app, passport) {

    //TODO:  Incoporate these into the front end
    //   app.get("/api/all", function (request, response) {
    //     request("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function (res) {
    //       console.log(res);
    //     });
    //   });

    //   app.get("/api/drink/:drink", function (request, response) {
    //     if (request.params.drink){
    //     request("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", function (res) {
    //         console.log(res);

    //       });
    //     }
    //   });
    //   app.get("/api/ingredient/:ingredient", function (request, response) {
    //     if (request.params.ingredient){
    //     request("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function (res) {
    //         console.log(res);
    //       });
    //     }
    //   });




    //#region Category Functions
    app.get("/api/category/", function(req, res) {
        category.getAll({})
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // add category
    app.post("/api/category", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        category.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                // res.json(dbResults);
                res.redirect('/category');
            });
    });
    //#endregion Category Functions

    //#region Drink Functions


    // add drink
    app.post("/api/drink", function(req, res) {
        drink.add(req.body, req.ingredients, req.location, req.user)
            .then(function(dbResults) {
                console.log(dbResults);
                res.redirect('/drink/' + encodeURIComponent(dbResults.drinkName));
            });
    });

    //     //TBD: update drink
    //    app.put("/api/drink", function(req, res) {
    //         console.log(req.body[0]);
    //         //Find all returns all entries for a table when used with no options
    //         drink.update(req.body[0])
    //             .then(function(dbResults) {
    //                 // We have access to the results as an argument inside of the callback function
    //                 res.json(dbResults);
    //             });
    //     });

    //#endregion Drink Functions

    //#region Friend Functions
    // app.get("/api/friend/:user", function(req, res) {
    //     friend.findAllByUser(req.params.user)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    // Find all Friends by user
    app.get("/api/friend/", function(req, res) {
        friend.findAllByUser(req.user.id)
            .then(function(dbResults) {
                var hbsObject = {
                    user: req.user,
                    friends: dbResults,
                    showFriends: true
                };
                // res.render('user-profile', hbsObject, { friends: true });
                res.render('user-profile', hbsObject);

            });
    });

    //TBD: // Remove Friend
    app.delete("/api/friend/:id", function(req, res) {

        friend.Remove(req.params.id)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });

    });


    // GET route for retrieving user by username
    app.get("/api/user/:id", function(req, res) {
        //Find all returns all entries for a table when used with no options
        user.findById(req.params.id).then(function(dbResults) {
            // console.log(dbResults)
            // We have access to the user as an argument inside of the callback function
            // res.json(dbResults);

            var hbsObject = {
                user: dbResults,
                isFriend: true
            };
            res.render('user-profile', hbsObject);
        });
    });

    //TBD: // Find all pending friend requests
    // app.get("/api/friend/:friend", function(req, res) {
    //     friend.findAllPendingByUser(req.params.drink)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    //TBD: // Accept Friend
    app.post("/api/friend", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        friend.add(req.body.friendId, req.user.id)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO:   // Add Friend - Convert to Controller 
    // app.post("/api/friend", function(req, res) {
    //     // console.log(req.body);
    //     db.create({
    //             friendname: req.body.friendname,

    //         })
    //         .then(function() {
    //             res.json();
    //         });
    // });
    //#endregion Friend Functions

    //#region Ingredient Functions
    // Add ingredient
    app.post("/api/ingredient", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        ingredient.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                // res.json(dbResults);
                res.redirect('/drink/' + encodeURIComponent(dbResults.ignredientName));
            });
    });

    // Find All ingredients
    app.get("/api/ingredient/", function(req, res) {
        ingredient.getAll({})
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    // Find ingredient by name
    app.get("/api/ingredient/:ingredient", function(req, res) {
        ingredient.findOneByIngredient(req.params.ingredient)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    //TBD: // Retire ingredient
    // app.put("/api/ingredient", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     ingredient.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    //#endregion Ingredient Functions

    //#region Part (drink ingredients) Functions
    // Find all parts by drinkID
    app.get("/api/part/:drink", function(req, res) {
        part.findAllByDrink(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    // Add drink part
    app.post("/api/part", function(req, res) {
        //Find all returns all entries for a table when used with no options
        part.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                // res.json(dbResults);

                // res.redirect('/part');
                res.redirect('/drink/' + encodeURIComponent(dbResults.drinkId));
            });
    });

    // //TODO: // update drink part
    // app.put("/api/part", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     part.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    //#endregion Part Functions

    //#region Place Functions
    //Get All Places
    app.get("/api/place/", function(req, res) {
        place.getAll()
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);

            });
    });

    // Add place
    app.post("/api/place/",
        function(req, res) {
            place.add(req.body, req.user.id)
                .then(function(dbResults) {
                    res.redirect('/place/' + encodeURIComponent(dbResults.placeName));
                });
        });


    // //TBD: // Update place
    // app.put("/api/place", function(req, res) {
    //    
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     place.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    // //TBD: // Mark Closed
    // app.put("/api/place", function(req, res) {
    //    
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     place.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    // #endregion Place Functions

    //#region Review Functions
    app.get("/api/review/:parm", function(req, res) {
        var parm = req.params.parm;
        var id;
        var parms = parm.split('&')
        parms.forEach(element => {
            switch (element.split('=')[0]) {
                //Find Reviews by user
                case "user":
                    id = element.split('=')[1];

                    review.findAllByUser(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;

                    //FindReviews by drink
                case "drink":
                    id = parseFloat(element.split('=')[1]);
                    review.findAllByDrink(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;

                    //TODO: //FindReviews by place
                case "place":
                    id = parseFloat(element.split('=')[1]);
                    review.findAllByPlace(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;
            }
        });

    });

    //Add Review
    app.post("/api/review", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        review.add(req.body, req.user)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                // res.json(dbResults);
                res.redirect('/drink/' + encodeURIComponent(dbResults.reviewId));
            });
    });

    //TODO: //Edit Review
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


    ////#region Vote Functions
    // //TBD: // Add Upvote
    // app.post("/api/upvote", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     vote.add(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });


    // //TBD: // Add Downvote
    // app.post("/api/downvote", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     vote.add(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });


    // //TBD: // Remove vote
    // app.delete("/api/vote/:id", function(req, res) {

    //     vote.Remove(req.params.id)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });


    // });
    ////#endregion Vote Functions


    //   app.post("/api/drink", function (req, res) {
    //     console.log(req.body);
    //     db.create({
    //       drink: req.body.drink,
    //       ingredient: req.body.ingredient,
    //       location: req.body.location,
    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });
    //   app.post("/api/review", function (req, res) {
    //     console.log(req.body);
    //     db.create({
    //       review: req.body.review,
    //       ratings: req.body.ratings
    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });
    //   app.post("/api/friend", function (req, res) {
    //     console.log(req.body);
    //     db.create({
    //       username: req.body.username,

    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });


    //   app.put("/api/review", function (req, res) {
    //     db.update(req.body,
    //       {
    //         where: {
    //           review: req.body.review
    //         }
    //     });
    // })
    //     app.get("/api/ingredient/:ingredient", function(request, response) {
    //         if (request.params.ingredient) {
    //             request("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function(res) {
    //                 console.log(res);
    //             });
    //         }
    //     });
    //     //#endregion CoctailDB Functions

}

// module.exports = app