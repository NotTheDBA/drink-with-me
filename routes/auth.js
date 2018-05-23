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

    // // GET route for retrieving user by username
    // app.get("/api/user/:username", function(req, res) {
    //     //Find all returns all entries for a table when used with no options
    //     user.findUserName(req.params.username).then(function(dbResults) {
    //         // console.log(dbResults)
    //         // We have access to the user as an argument inside of the callback function
    //         res.json(dbResults);
    //     });
    // });

    //   app.post("/api/login", function (req, res) {
    //     console.log(req.body);
    //     db.create({
    //       username: req.body.username,
    //       password: req.body.password,
    //       repassword: req.body.repassword,
    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });
    //     // app.put("/api/username", function(req, res) {
    //     //     db.update(req.body, {
    //     //             where: {
    //     //                 username: req.body.username
    //     //             }
    //     //         })
    //     //         .then(function() {
    //     //             res.json();
    //     //         });
    //     // });


    //   app.get("/api/username/:username", function (request, response) {
    //     db.findAll({
    //       where: {
    //         username: req.params.username
    //       }
    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });
    //   app.get("/api/username/:friend", function (req, res) {
    //     db.findAll({
    //       where: {
    //         username: req.params.username
    //       }
    //     })
    //       .then(function () {
    //         res.json();
    //       });
    //   });


    //#endregion User Functions

}