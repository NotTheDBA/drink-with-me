var db = require("../models");

module.exports = {

    //TODO: Flesh out findAllByProperty
    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Review.findAll({
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

    //TODO: Flesh out findAllByProperty
    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Review.findAll({
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

    //TODO: Flesh out findAllByProperty
    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Review.findAll({
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
    add: function(review) {

        // create takes an argument of an object for our model
        var $add =
            db.Review.create({
                property1: review.property1,
                property2: review.property2,
                property3: review.property3,
                // placeID: placeId
                placeId: 0,
                createdBy: review.createdBy,
                updatedBy: review.updatedBy
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