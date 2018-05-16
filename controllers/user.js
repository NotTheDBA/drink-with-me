var db = require("../models");

module.exports = {

    // addUser: function(user) {
    //     // create takes an argument of an object describing the item we want to
    //     // insert into our table. In this case we just we pass in an object with a text
    //     // and complete property 
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

    findAll: function(user) {

        // findAll returns all entries for a table when used with no options
        var $findall = db.User.findAll({}).then(function(dbUser) {
            // return our results from the function
            return dbUser;
        });
        // This returns a promise to the external code, so it can access our results
        return $findall;
    }


}