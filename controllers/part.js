var db = require("../models");

module.exports = {

    //TODO: Flesh out findAllByProperty
    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Part.findAll({
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
    add: function(part) {

        // create takes an argument of an object for our model
        var $add =
            db.Part.create({
                property1: part.property1,
                property2: part.property2,
                property3: part.property3,
                // placeID: placeId
                placeId: 0,
                createdBy: part.createdBy,
                updatedBy: part.updatedBy
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