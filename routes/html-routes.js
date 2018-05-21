var placeController = require("../controllers/place.js");

module.exports = function(app) {
    app.get('/', function(req, res) {
        // res.send('Welcome to Passport with Sequelize');
        res.redirect('/signup');
    });

    app.get('/place', placeController.newPlace);

}