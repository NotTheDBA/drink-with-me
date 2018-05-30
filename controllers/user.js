var db = require("../models");

module.exports = {

    // addUser: function(user) {

    //     //Default username to email, truncated at the @ symbol)
    //     if (typeof user.userName === "undefined") {
    //         user.userName = user.email.split('@')[0];
    //     }

    //     //Default display name to username
    //     if (typeof user.displayName === "undefined") {
    //         user.displayName = user.userName;
    //     }


    //     // // //Requiring bcrypt for password hashing. Using the bcrypt-nodejs version
    //     // // //as the regular bcrypt module sometimes causes errors on Windows machines
    //     // // var bcrypt = require("bcrypt-nodejs");
    //     // // //This encrypts the password as it's being saved
    //     //     //     user.passKey = bcrypt.hashSync(user.passKey, bcrypt.genSaltSync(10), null);

    //     // });

    //     // create takes an argument of an object for our model
    //     var $create =
    //         db.User.create({
    //             email: user.email,
    //             userName: user.userName,
    //             displayName: user.displayName,
    //             passKey: user.passKey,
    //             gravatar: user.gravatar
    //         }).then(function(dbUser) {
    //             // We have access to the new todo as an argument inside of the callback function
    //             return dbUser;
    //         })
    //         .catch(function(err) {
    //             // Whenever a validation or flag fails, an error is thrown
    //             // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    //             return err;
    //         });

    //     // This returns a promise to the external code, so it can access our results
    //     return $create;
    // },

    // getAll: function() {

    //     // getAll returns all entries for a table when used with no options
    //     var $getAll = db.User.findAll({})
    //         .then(function(dbUser) {
    //             // return our results from the function
    //             return dbUser;
    //         })
    //         .catch(function(err) {
    //             // Whenever a validation or flag fails, an error is thrown
    //             // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    //             return err;
    //         });
    //     // This returns a promise to the external code, so it can access our results
    //     return $getAll;
    // },

    // login: function(username, passkey) {
    //     // // //This authenticates the password when the user logs in
    //     // // User.prototype.validatePassKey = function(passKey) {
    //     // //     return bcrypt.compareSync(passKey, this.passKey);
    //     // // };
    //     // functionName does something
    //     var $login = db.User.findOne({
    //             where: {
    //                 userName: username,
    //                 passKey: passkey
    //             }
    //         }).then(function(results) {
    //             // return our results from the function
    //             return results;
    //         })
    //         .catch(function(err) {
    //             // Whenever a validation or flag fails, an error is thrown
    //             // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    //             return err;
    //         });
    //     // This returns a promise to the external code, so it can access our results
    //     return $login;
    // }
}