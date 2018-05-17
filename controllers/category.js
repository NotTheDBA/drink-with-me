var db = require("../models");

module.exports = {
    //TODO: Flesh out getAll
    getAll: function() {

        // findAll returns all entries for a table when used with no options
        var $findall = db.Category.findAll({}).then(function(dbResults) {
            // return our results from the function
            return dbResults;
        });
        // This returns a promise to the external code, so it can access our results
        return $findall;
    },

    //TODO: Flesh out add
    add: function(category) {

        // create takes an argument of an object for our category
        var $add =
            db.Category.create({
                ingredientName: category.ingredientName,
                categoryId: category.categoryId,
                isAlcoholic: category.isAlcoholic,
                isCustom: category.isCustom,
                isRetired: category.isRetired,
                createdBy: category.createdBy,
                updatedBy: category.updatedBy
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