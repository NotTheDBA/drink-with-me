var db = require("../models");

module.exports = {
    //TODO:  Write functions
    //   //template
    // functionName: function(parm) {
    //     // functionName does something
    //     var $functionName = db.User.findAll({}).then(function(results) {
    //         // return our results from the function
    //         return results;
    //     });
    //     // This returns a promise to the external code, so it can access our results
    //     return $functionName;
    // },

    findAllByProperty: function(property) {

        // findByProperty does something
        var $findByProperty = db.Model.findAll({
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