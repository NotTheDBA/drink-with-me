var db = require("../models");

module.exports = {
    //TODO:  Write functions
    findAll: function() {

        // findAll returns all entries for a table when used with no options
        var $findall = db.model.findAll({}).then(function(dbResults) {
            // return our results from the function
            return dbResults;
        });
        // This returns a promise to the external code, so it can access our results
        return $findall;
    },

    addModel: function(property1, property2, property3) {

        // create takes an argument of an object for our model
        var $addModel =
            db.Model.create({
                property1: model.property1,
                property2: model.property2,
                property3: model.property3,
                // placeID: placeId
                placeId: 0,
                createdBy: model.createdBy,
                updatedBy: model.updatedBy
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
        return $addModel;
    }
}