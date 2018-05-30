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
    //1

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
    //2
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
    //3
    //  find drink
    app.get("/api/drink/:drink", function(req, res) {
        drink.findDrink(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    //4

    // add drink
    app.post("/api/drink", function(req, res) {
        //TODO:  Continue to scatter this pattern through the site...
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            console.log("moving on anyway...")
            drink.add(req.body, req.ingredients, req.location, req.user)
                .then(function(dbResults) {
                    console.log(dbResults);
                    res.redirect('/drink/' + encodeURIComponent(dbResults.drinkName));
                });

        }
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
    //5
    //#region Friend Functions
    // app.get("/api/friend/:user", function(req, res) {
    //     friend.getAllByUser(req.params.user)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    // Find specific friend
    app.post("/api/friend/", function(req, res) {
        // console.log(req.body.email)
        friend.findByEmail(req.body.email)
            .then(function(user) {
                // console.log(user)
                console.log(user[0].id)
                res.redirect('/friends/' + encodeURIComponent(user[0].id));
            });
    });
    //6
    //TODO: // Remove Friend
    app.delete("/api/friend/:id", function(req, res) {

            friend.Remove(req.params.id)
                .then(function(dbResults) {
                    // We have access to the results as an argument inside of the callback function
                    res.json(dbResults);
                });

            // Add a friend
            // app.post("/api/friend/:id", function(req, res) {
            app.get("/friend/add/", function(req, res) {
                console.log(req.params)
                console.log(req.body)
                    // console.log(req.body.email)
                    // friend.add(req.params.id, req.user.id)
                    //     .then(function(results) {
                    //         // console.log(user)
                    //         // console.log(user[0].id)
                    //         res.redirect('/friends');
                    //     });
            });
        })
        //7
        //TODO: // Find all pending friend requests
    app.get("/api/friend/:friend", function(req, res) {
        friend.getAllPendingByUser(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    //8
    //TODO: // Accept Friend

    // GET route for retrieving user by username
    app.get("/friends/:id", function(req, res) {
        //Find all returns all entries for a table when used with no options
        friend.findById(req.params.id).then(function(dbResults) {
            // console.log(dbResults)
            // We have access to the user as an argument inside of the callback function
            // res.json(dbResults);
            var hbsObject = {
                user: dbResults,
                layout: "main",
                isFriend: true
            };
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



    //TBD: // Find all pending friend requests
    // app.get("/api/friend/:friend", function(req, res) {
    //     friend.getAllPendingByUser(req.params.drink)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    //TBD: // Accept Friend
    app.put("/api/friend", function(req, res) {
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
    //9
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
    //10
    // Find All ingredients
    app.get("/api/ingredient/", function(req, res) {
        ingredient.getAll({})
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    //11
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
    //12
    //#region Part (drink ingredients) Functions
    // Find all parts by drinkID
    app.get("/api/part/:drink", function(req, res) {
        part.getAllByDrink(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });
    //13    // Add drink part
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
    //14
    //#region Place Functions
    //Get All Places
    app.get("/api/place/", function(req, res) {
        place.getAll()
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);

            });
    });
    //15
    // Add place
    app.post("/api/place/",
        function(req, res) {
            place.add(req.body, req.user.id)
                .then(function(dbResults) {
                    console.log(dbResults.placeName)
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
    //16
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

                    review.getAllByUser(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;

                    //FindReviews by drink
                case "drink":
                    id = parseFloat(element.split('=')[1]);
                    review.getAllByDrink(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;

                    //TODO: //FindReviews by place
                case "place":
                    id = parseFloat(element.split('=')[1]);
                    review.getAllByPlace(id)
                        .then(function(dbResults) {
                            // We have access to the results as an argument inside of the callback function
                            res.json(dbResults);
                        });
                    break;
            }
        });

    });
    //17
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