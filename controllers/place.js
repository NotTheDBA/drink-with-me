var db = require("../models");

module.exports = {

    getAll: function() {

        // findAll returns all entries for a table when used with no options
        var $findall = db.Place.findAll({}).then(function(dbResults) {
                // return our results from the function
                return dbResults;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findall;
    },

    findOneByName: function(name) {

        // findByProperty does something
        var $findByProperty = db.Place.findOne({
                where: {
                    placeName: name
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
        return $findByProperty;
    },

    add: function(place) {
        // create takes an argument of an object for our model
        var $add =
            db.Place.create({
                placeName: place.placeName,
                type: place.type,
                isPrivate: place.isPrivate,
                createdBy: place.createdBy,
                updatedBy: place.updatedBy
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