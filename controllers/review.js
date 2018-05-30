var db = require("../models");

module.exports = {


    newReview: function(req, res) {

        res.render('add-review');
    },

    // Probably don't need to get all Reviews...  but mayby sample 5-10?
    // getAll: function() {
    //     var $getAll = db.Review.findAll({}).then(function(dbResults) {

    //             return dbResults;
    //         })
    //         .catch(function(err) {

    //             return err;
    //         });

    //     return $getAll;
    // },
    // //Probably won't find by review
    // findReview: function(review) {

    //     var $findByReview = db.review.findOne({
    //             where: {
    //                 review: review
    //             }
    //         }).then(function(results) {

    //             return results;
    //         })
    //         .catch(function(err) {

    //             return err;
    //         });

    //     return $findByReview;
    // },
    getAllByUser: function(userId) {
        // getAllByUser does something
        var $getAllByUser = db.Review.findAll({
                where: {
                    createdBy: userId
                },
                include: ['drink']
            }).then(function(results) {
                console.log(results)
                    // return our results from the function
                return results;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $getAllByUser;
    },

    getAllByDrink: function(drinkId) {

        // getAllByDrink does something
        var $getAllByDrink = db.Review.findAll({
                where: {
                    drinkId: drinkId
                },
                include: ['drink']
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

    add: function(review, user) {

        // create takes an argument of an object for our model
        var $add =
            db.Review.create({
                drinkId: review.drinkId,
                rating: review.rating,
                review: review.review,
                createdBy: user.id,
                updatedBy: user.id

            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $add;
    },
    edit: function(review, user) {

        var $edit =
            db.review.update({
                review: review.review,
                type: review.type,
                updatedBy: user.id

            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $edit;
    },

    //TODO: Figure out how to find by related table Place
    getAllByPlace: function(placeId) {

        // getAllByPlace does something
        var $getAllByPlace = db.Review.findAll({
                where: {
                    placeId: placeId
                },
                include: ['drink']
            }).then(function(results) {
                // return our results from the function
                console.log(results)
                return results;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $getAllByPlace;
    }

}