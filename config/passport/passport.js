



//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var md5 = require("blueimp-md5");



module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);

                    var data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: email,
                        gravatar: email
                    };

                    User.create(data).then(function(newUser, created) {

                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function(req, email, password, done) {

            var User = user;

            var isValidPassword = function(userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {

                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

        
        // (function($)
        // {
        //     $.gravatar = function(email, overrides)
        //     {
        //         var options = $.extend({
        //             // Defaults are not hardcoded here in case gravatar changes them on their end.
        //             // integer size: between 1 and 512, default 80 (in pixels)
        //             size: '',
        //             // rating: g (default), pg, r, x
        //             rating: '',
        //             // url to define a default image (can also be one of: identicon, monsterid, wavatar)
        //             image: '',
        //             // secure
        //             secure: true,
        //             // support css on img element
        //             classes: ''
        //         }, overrides);

        //         var baseUrl = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';

        //         return $('<img src="' + baseUrl +
        //             hex_md5(email) +
        //             '.jpg?' +
        //             (options.size ? 's=' + options.size + '&' : '') +
        //             (options.rating ? 'r=' + options.rating + '&' : '') +
        //             (options.image ? 'd=' + encodeURIComponent(options.image) : '') +
        //             '"' +
        //             (options.classes ? ' class="' + options.classes + '"' : '') +
        //             ' />').bind('error', function()
        //             {
        //                 $(this).remove();
        //             });
        //     };
        // })(jQuery)

    ));

}