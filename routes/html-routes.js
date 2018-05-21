var place = require("../controllers/place");

module.exports = function(app) {
    app.get('/', function(req, res) {
        // res.send('Welcome to Passport with Sequelize');
        res.redirect('/signup');
    });

    app.get('/place/add', place.newPlace);

    //Get All Places
    app.get("/place/", function(req, res) {
        place.getAll()
            .then(function(dbResults) {
                var hbsObject = {
                    places: dbResults
                };
                res.render("show-place", hbsObject);
            });
    });
}