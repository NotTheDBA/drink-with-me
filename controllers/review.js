var db = require("../models");

module.exports = {

    findAllByUser: function(userId) {

        // findAllByUser does something
        var $findAllByUser = db.Review.findAll({
                where: {
                    createdBy: userId
                }
            }).then(function(results) {
                // return our results from the function
                return results;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findAllByUser;
    },

    findAllByDrink: function(drinkId) {

        // findAllByDrink does something
        var $findAllByDrink = db.Review.findAll({
                where: {
                    drinkId: drinkId
                }
            }).then(function(results) {
                // return our results from the function
                return results;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findAllByDrink;
    },

    //TODO: Figure out how to find by related table Place
    findAllByPlace: function(placeId) {

        // findAllByPlace does something
        var $findAllByPlace = db.Review.findAll({
                where: {
                    placeId: placeId
                }
            }).then(function(results) {
                // return our results from the function
                return results;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findAllByPlace;
    },

    add: function(review) {

        // create takes an argument of an object for our model
        var $add =
            db.Review.create({
                drinkId: review.drinkId,
                rating: review.rating,
                review: review.review,
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