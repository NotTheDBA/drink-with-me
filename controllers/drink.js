var db = require("../models");

module.exports = {

    //template
    findDrink: function(name) {
        // functionName does something
        var $findDrink = db.Drink.findAll({
                where: {
                    drinkName: name
                }
            })
            .then(function(dbResults) {
                // We have access to the new todo as an argument inside of the callback function
                return dbResults;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findDrink;
    },

    addDrink: function(drink, ingredients, location) {

        // create takes an argument of an object for our model
        var $addDrink =
            db.Drink.create({
                drinkName: drink.drinkName,
                isAlcoholic: drink.isAlcoholic,
                isCustom: drink.isCustom,
                placeId: 0,
                createdBy: drink.createdBy,
                updatedBy: drink.updatedBy
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
        return $addDrink;
    }
}