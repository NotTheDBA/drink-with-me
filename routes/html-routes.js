// var category = require("../controllers/category");
var drink = require("../controllers/drink");
var friend = require("../controllers/friend");
var ingredient = require("../controllers/ingredient");
// var part = require("../controllers/part");
var place = require("../controllers/place");
var review = require("../controllers/review");


module.exports = function(app) {
    app.get('/testlink', function(req, res) {
        res.render('testlinks');
    });

    app.get('/', function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            res.redirect('/dashboard');
        }
    });

    app.get('/drink/add', function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            res.render('add-drink');
        }
    });

    // app.get('/friend/add', function(req, res) {
    //     if (typeof req.user == "undefined") {
    //         res.redirect('/signin');
    //     } else {
    //         res.render('add-friend');
    //     }
    // });

    app.get('/ingredient/add', function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            res.render('add-ingredient');
        }
    });

    app.get('/place/add', function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            res.render('add-place');
        }
    });

    app.get('/review/add', function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            res.render('add-review');
        }
    });

    //Get All drink
    app.get("/drink/", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {

            drink.getAllByUser(req.user.id)
                .then(function(dbResults) {
                    var hbsObject = {
                        drinks: dbResults
                    };
                    res.render("drinks", hbsObject);
                });
        }
    });


    //Get drink by name
    app.get("/drink/:drink", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            drink.findDrink(req.params.drink)
                .then(function(dbResults) {
                    console.log("drink")
                    console.log(dbResults)
                    var hbsObject = {
                        drinks: dbResults
                    };
                    res.render("drinks", hbsObject);
                });
        }
    });

    //Get All friends
    app.get("/friends", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            console.log("check friends")
            friend.getAllByUser(req.user.id)
                .then(function(dbResults) {
                    // console.log(dbResults)

                    // console.log(dbResults[0])

                    console.log(dbResults[0][0])

                    console.log(dbResults[0][0].firstname)
                    var hbsObject = {
                        user: req.user,
                        friends: dbResults[0],
                        layout: "main",
                        showFriends: true,
                        isMe: true
                    };
                    res.render('user-profile', hbsObject);
                });
        }
    });


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
                isFriend: false
            };
            res.render('user-profile', hbsObject);
        });
    });

    //Get All ingredients
    app.get("/ingredient/", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            ingredient.getAll()
                .then(function(dbResults) {
                    var hbsObject = {
                        ingredient: dbResults
                    };
                    res.render("ingredients", hbsObject);
                });
        }
    });

    // Get All Places
    app.get("/place", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            place.getAll()
                .then(function(dbResults) {
                    var hbsObject = {
                        places: dbResults
                    };
                    res.render("places", hbsObject);
                });
        }
    });

    //Get Place by name
    app.get("/place/:name", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            place.findOneByName(req.params.name)
                .then(function(dbResults) {

                    var hbsObject = {
                        places: dbResults,
                        place: true
                    };
                    drink.getAllByPlace(dbResults.placeId)
                        .then(function(results) {
                            hbsObject.drinks = results;
                            res.render("show-place", hbsObject);
                        });

                });
        }
    });


    //Get All review
    app.get("/review", function(req, res) {
        if (typeof req.user == "undefined") {
            res.redirect('/signin');
        } else {
            // console.log("fired")
            review.getAllByUser(req.user.id)
                .then(function(dbResults) {
                    console.log(dbResults)
                    var hbsObject = {
                        reviews: dbResults
                    };
                    res.render("reviews", hbsObject);
                });
        }
    });


}