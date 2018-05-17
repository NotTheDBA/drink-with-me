var db = require("../models");

module.exports = {

    //TODO: Flesh out findAllByProperty
    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Friend.findAll({
            where: {
                propertyName: property
            }
        }).then(function(results) {
            // return our results from the function
            return results;
        });
        // This returns a promise to the external code, so it can access our results
        return $findByProperty;
    },

    //TODO: Flesh out add
    add: function(friend) {

        // create takes an argument of an object for our model
        var $add =
            db.Friends.create({
                property1: friend.property1,
                property2: friend.property2,
                property3: friend.property3,
                // placeID: placeId
                placeId: 0,
                createdBy: friend.createdBy,
                updatedBy: friend.updatedBy
                    // ingredients: req.body.ingredients,
                    // location: req.body.location,
            }).then(function(dbResults) {
                // We have access to the new todo as an argument inside of the callback function
                return dbResults;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });

        // This returns a promise to the external code, so it can access our results
        return $add;
    }
}