var db = require("../models");

module.exports = {

    getAllByDrink: function(drink) {

        // getAllByDrink does something
        var $getAllByDrink = db.Part.findAll({
                where: {
                    drinkId: drink
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
        return $getAllByDrink;
    },
    //Adds new ingredient "part" to drink.
    add: function(part) {
        // create takes an argument of an object for our model
        var isOptional = (part.isOptional === "on");
        var $add =
            db.Part.create({
                drinkId: part.drinkId,
                ingredientId: part.ingredientId,
                isOptional: isOptional
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