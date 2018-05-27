var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);

    // POST route for saving a new user
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

    // POST route for logging in a user
    app.post('/login',
        passport.authenticate('local'),
        function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.redirect('/user/' + req.user.username);
        });


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    //#region User Functions

    //     // GET route for retrieving all users
    //     app.get("/api/user", function(req, res) {
    //         // console.log(req.body[0]);
    //         //Find all returns all entries for a table when used with no options
    //         user.getAll({}).then(function(dbResults) {
    //             // console.log(dbResults)
    //             // We have access to the user as an argument inside of the callback function
    //             res.json(dbResults);
    //         });
    //     });



}