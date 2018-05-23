// var category = require("../controllers/category");
var drink = require("../controllers/drink");
var friend = require("../controllers/friend");
var ingredient = require("../controllers/ingredient");
// var part = require("../controllers/part");
var place = require("../controllers/place");
var review = require("../controllers/review");


module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/dashboard');
    });

    app.get('/testlink', function(req, res) {
        res.render('testlinks');
    });


    app.get('/drink/add', function(req, res) {
        res.render('add-drink');
    });

    app.get('/friend/add', function(req, res) {
        res.render('add-friend');
    });

    app.get('/ingredient/add', function(req, res) {
        res.render('add-ingredient');
    });

    // app.get('/place/add', place.newPlace);
    app.get('/place/add', function(req, res) {
        res.render('add-place');
    });

    app.get('/review/add', function(req, res) {
        res.render('add-review');
    });

    //Get All drink
    app.get("/drink/", function(req, res) {
        drink.getAll()
            .then(function(dbResults) {
                var hbsObject = {
                    drinks: dbResults
                };
                res.render("drinks", hbsObject);
            });
    });


    //Get drink by name
    app.get("/drink/:drink", function(req, res) {
        drink.findDrink(req.params.drink)
            .then(function(dbResults) {
                console.log("drink")
                console.log(dbResults)
                var hbsObject = {
                    drinks: dbResults
                };
                res.render("drinks", hbsObject);
            });
    });

    //Get All friends
    app.get("/friends", function(req, res) {
        friend.findAllByUser(req.user.id)
            .then(function(dbResults) {
                var hbsObject = {
                    friend: dbResults
                };
                res.render("friends", hbsObject);
            });
    });

    //Get All ingredient
    app.get("/ingredient/", function(req, res) {
        ingredient.getAll()
            .then(function(dbResults) {
                var hbsObject = {
                    ingredient: dbResults
                };
                res.render("ingredients", hbsObject);
            });
    });

    // Get All Places
    app.get("/place", function(req, res) {
        place.getAll()
            .then(function(dbResults) {
                var hbsObject = {
                    places: dbResults
                };
                res.render("places", hbsObject);
            });
    });

    //Get Place by name
    app.get("/place/:name", function(req, res) {
        // console.log(req.params.name)
        // console.log(unescape(decodeURIComponent(req.params.name)))
        place.findOneByName(req.params.name)
            .then(function(dbResults) {
                var hbsObject = {
                    places: dbResults
                };
                res.render("show-place", hbsObject);
            });
    });


    //Get All review
    app.get("/review", function(req, res) {
        // console.log("fired")
        review.findAllByUser(req.user.id)
            .then(function(dbResults) {
                console.log(dbResults)
                var hbsObject = {
                    reviews: dbResults
                };
                res.render("reviews", hbsObject);
            });
    });

}