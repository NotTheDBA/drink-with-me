// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our model controllers
// TODO: Figure out how we can use an index.js like sequelize does for models...
// var control = require("../controllers");

var category = require("../controllers/category");
// var control = require("../controllers");
var drink = require("../controllers/drink");
var ingredient = require("../controllers/ingredient");
var part = require("../controllers/part");
var place = require("../controllers/place");
var user = require("../controllers/user");
var review = require("../controllers/review");

var express = require('express')
var app = express()
var request = require("request");


module.exports = function (app) {

  app.get("/api/all", function (request, response) {
    request("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function (res) {
      console.log(res);
    });
  });

  app.get("/api/drink/:drink", function (request, response) {
    if (request.params.drink){
    request("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", function (res) {
        console.log(res);
    
      });
    }
  });
  app.get("/api/ingredient/:ingredient", function (request, response) {
    if (request.params.ingredient){
    request("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function (res) {
        console.log(res);
      });
    }
  });
  app.get("/api/username/:username", function (request, response) {
    db.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(function () {
        res.json();
      });
  });
  app.get("/api/username/:friend", function (req, res) {
    db.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(function () {
        res.json();
      });
  });

  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      repassword: req.body.repassword,
      birthdate: req.body.birthdate,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/login", function (req, res) {
    console.log(req.body);
    db.create({
      username: req.body.username,
      password: req.body.password,
      repassword: req.body.repassword,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/drink", function (req, res) {
    console.log(req.body);
    db.create({
      drink: req.body.drink,
      ingredient: req.body.ingredient,
      location: req.body.location,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/review", function (req, res) {
    console.log(req.body);
    db.create({
      review: req.body.review,
      ratings: req.body.ratings
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/friend", function (req, res) {
    console.log(req.body);
    db.create({
      username: req.body.username,

    })
      .then(function () {
        res.json();
      });
  });


  app.put("/api/review", function (req, res) {
    db.update(req.body,
      {
        where: {
          review: req.body.review
        }
    });
})
    app.get("/api/ingredient/:ingredient", function(request, response) {
        if (request.params.ingredient) {
            request("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function(res) {
                console.log(res);
            });
        }
    });
    //#endregion CoctailDB Functions

    //#region Category Functions
    app.get("/api/category/", function(req, res) {
        category.getAll({})
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: 
    // add category
    app.post("/api/category", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        category.add(req.body[0])
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
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        drink.addDrink(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //     //TODO: update drink
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
    //TODO: // Find all Friends by user
    app.get("/api/friend/:user", function(req, res) {
        friend.findOneByUser(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Remove Friend
    app.delete("/api/friend/:id", function(req, res) {

        friend.Remove(req.params.id)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });

    });

    //TODO: // Find all pending friend requests
    app.get("/api/friend/:friend", function(req, res) {
        friend.findAllPendingByUser(req.params.drink)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: // Accept Friend
    app.post("/api/friend", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        friend.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    //TODO: Convert to Controller   // Add Friend
    app.post("/api/friend", function(req, res) {
        // console.log(req.body);
        db.create({
                friendname: req.body.friendname,

            })
            .then(function() {
                res.json();
            });
    });
    //#endregion Friend Functions

    //#region Ingredient Functions
    // Add ingredient
    app.post("/api/ingredient", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        ingredient.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
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


    // //TODO: // Retire ingredient
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
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        part.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
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

    //Get Place by name
    app.get("/api/place/:name", function(req, res) {
        place.findOneByName(req.params.name)
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    // Add place
    app.post("/api/place", function(req, res) {
        // console.log(req.body[0]);
        //Find all returns all entries for a table when used with no options
        place.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });


    // //TODO: // Update place
    // app.put("/api/place", function(req, res) {
    //     // //TODO: Convert to Controller  // Update Username
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     place.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    // //TODO: // Mark Closed
    // app.put("/api/place", function(req, res) {
    //     // //TODO: Convert to Controller  // Update Username
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     place.update(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });

    //#endregion Place Functions

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
        review.add(req.body[0])
            .then(function(dbResults) {
                // We have access to the results as an argument inside of the callback function
                res.json(dbResults);
            });
    });

    // //TODO: //Edit Review
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
        user.getAll({}).then(function(dbResults) {
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

    ////#region Vote Functions
    // //TODO: // Add Upvote
    // app.post("/api/upvote", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     vote.add(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });


    // //TODO: // Add Downvote
    // app.post("/api/downvote", function(req, res) {
    //     console.log(req.body[0]);
    //     //Find all returns all entries for a table when used with no options
    //     vote.add(req.body[0])
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    // });


    // //TODO: // Remove vote
    // app.delete("/api/vote/:id", function(req, res) {

    //     vote.Remove(req.params.id)
    //         .then(function(dbResults) {
    //             // We have access to the results as an argument inside of the callback function
    //             res.json(dbResults);
    //         });


    // });
    ////#endregion Vote Functions
}

module.exports = app 
