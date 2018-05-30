var db = require("../models");

module.exports = {
    getAll: function() {

        // getAll returns all entries for a table when used with no options
        var $getAll = db.Ingredient.findAll({}).then(function(dbResults) {
                // return our results from the function
                return dbResults;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $getAll;
    },
    findOneByIngredient: function(ingredient) {

        // findByIngredient does something
        var $findByIngredient = db.Ingredient.findOne({
                where: {
                    ingredientName: ingredient
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
        return $findByIngredient;
    },
    //TODO: Flesh out getAllByCategory
    getAllByCategory: function(Category) {

        // findByCategory does something
        var $findByCategory = db.Ingredient.findAll({
                where: {
                    categoryName: Category
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
        return $findByCategory;
    },
    add: function(ingredient) {

        // create takes an argument of an object for our model
        var isAlcoholic = (ingredient.isAlcoholic === "on");
        var isCustom = (ingredient.isCustom === "on");
        var isRetired = (ingredient.isRetired === "on");
        var $add =
            db.Ingredient.create({
                ingredientName: ingredient.ingredientName,
                categoryId: ingredient.categoryId,
                isAlcoholic: isAlcoholic,
                isCustom: isCustom,
                isRetired: isRetired,
                createdBy: ingredient.createdBy,
                updatedBy: ingredient.updatedBy
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