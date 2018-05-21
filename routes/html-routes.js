var place = require("../controllers/place");

module.exports = function(app) {
    app.get('/', function(req, res) {
        // res.send('Welcome to Passport with Sequelize');
        res.redirect('/signup');
    });

    app.get('/place/add', function(req, res) {
        res.render('add-place');
    });

    // app.get('/place/add', place.newPlace);

    //Get All Places
    app.get("/place", function(req, res) {
        place.getAll()
            .then(function(dbResults) {
                var hbsObject = {
                    places: dbResults
                };
                res.render("show-place", hbsObject);
            });
    });

    // //TODO:  Test and verify url 
    // app.get('/drink/add', drink.add);
    // //Get All Places
    // app.get("/drink/", function(req, res) {
    //     place.getAll()
    //         .then(function(dbResults) {
    //             var hbsObject = {
    //                 places: dbResults
    //             };
    //             res.render("show-drink", hbsObject);
    //         });
    // });

    // //TODO:  Test and verify url 
    // app.get('/friend/add', friend.add);
    // //Get All Places
    // app.get("/friend/", function(req, res) {
    //     friend.getAll()
    //         .then(function(dbResults) {
    //             var hbsObject = {
    //                 friend: dbResults
    //             };
    //             res.render("show-friend", hbsObject);
    //         });
    // });

    // //TODO:  Test and verify url 
    // app.get('/ingredient/add', ingredient.add);
    // //Get All Places
    // app.get("/ingredient/", function(req, res) {
    //     ingredient.getAll()
    //         .then(function(dbResults) {
    //             var hbsObject = {
    //                 ingredient: dbResults
    //             };
    //             res.render("show-ingredient", hbsObject);
    //         });
    // });

    // //TODO:  Test and verify url 
    // app.get('/review/add', review.add);
    // //Get All review
    // app.get("/review/", function(req, res) {
    //     review.getAll()
    //         .then(function(dbResults) {
    //             var hbsObject = {
    //                 review: dbResults
    //             };
    //             res.render("show-review", hbsObject);
    //         });
    // });



}