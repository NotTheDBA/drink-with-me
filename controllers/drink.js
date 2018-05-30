var db = require("../models");

module.exports = {

    newDrink: function(req, res) {
        res.render('add-drink');
    },

    getAll: function() {

        var $getAll = db.Drink.findAll({}).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {
                return err;
            });
        return $getAll;
    },

    getAllByPlace: function(placeId) {

        var $getAll = db.Drink.findAll({
            where: {
                placeId: placeId
            }
        }).then(function(dbResults) {
            return dbResults;
        }).catch(function(err) {
            return err;
        });
        return $getAll;
    },

    getAllByUser: function(userId) {

        var $getAll = db.Drink.findAll({
            where: {
                userId: userId
            }
        }).then(function(dbResults) {
            return dbResults;
        }).catch(function(err) {
            return err;
        });
        return $getAll;
    },

    findDrink: function(drink) {

        var $findDrink = db.Drink.findAll({
                where: {
                    drinkName: drink
                }
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
        return $findDrink;
    },

    add: function(drink, ingredients, location, user) {
        console.log(user)
            // console.log(ingredients)
            // console.log(location)
            // console.log(drink)
            // console.log(drink.drinkName)
            // console.log(drink.isAlcoholic)
            // console.log(drink.isAlcoholic === "on")
        var isAlcoholic = (drink.isAlcoholic === "on");
        var isCustom = (drink.isCustom === "on");

        // create takes an argument of an object for our model
        var $add =
            db.Drink.create({
                drinkName: drink.drinkName,
                isAlcoholic: isAlcoholic,
                isCustom: isCustom,
                placeId: 0,
                createdBy: user.id,
                updatedBy: user.id
                    // ingredients: req.body.ingredients,
                    // location: req.body.location,
            }).then(function(dbResults) {
                // We have access to the new todo as an argument inside of the callback function
                return dbResults;
            })
            .catch(function(err) {
                console.log(err);
            });

        // //if we get here, there was an error - maybe a dupe drink?
        // db.Drink.findOne({
        //         where: {
        //             drinkName: drink.drinkName
        //         }
        //     }).then(function(dbResults) {
        //         // We have access to the new todo as an argument inside of the callback function
        //         return dbResults;
        //     })
        //     .catch(function(err) {
        //         // Whenever a validation or flag fails, an error is thrown
        //         // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        //         return err;
        //     });
        // This returns a promise to the external code, so it can access our results
        return $add;
    },

    edit: function(drink, ingredients, location, user) {

        var $edit =
            db.drink.update({
                drinkName: drink.drinkName,
                type: drink.type,
                createdBy: user.id,
                updatedBy: user.id
                    // ingredients: req.body.ingredients,
                    // location: req.body.location,
            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $edit;
    }
}