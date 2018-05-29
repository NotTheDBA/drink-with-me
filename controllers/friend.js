var db = require("../models");

module.exports = {


    newFriend: function(req, res) {

        res.render('add-friend');
    },

    //TBD: //Find By Username

    findById: function(id) {
        console.log(id)
            // functionName does something
        var $findById = db.user.findAll({
                where: {
                    id: id
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
        return $findById;
    },

    //TODO: //Find By Email
    findByEmail: function(email) {
        console.log(email)
            // functionName does something
        var $findByEmail = db.user.findAll({
                where: {
                    email: email
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
        return $findByEmail;
    },

    // getAll: function() {

    //     var $getAll = db.Friend.findAll({}).then(function(dbResults) {

    //             return dbResults;
    //         })
    //         .catch(function(err) {

    //             return err;
    //         });

    //     return $getAll;
    // },


    //Find all user's friends
    findAllByUser: function(userId) {

        console.log(userId)
            // var $findAllByUser = db.user.findAll(
            //         // {
            //         // where: { userId: userId }
            //         // where: {
            //         //     userId: {
            //         //         $not: userId
            //         //     }
            //         // }
            //         // }
            //         {
            //             include: [{
            //                 model: db.Friend,
            //                 through: {
            //                     where: { userId: userId }
            //                 }
            //             }]
            //         }

        var $findAllByUser = db.Friend.findAll({
                    include: [{
                        model: db.user,
                        through: {
                            where: { userId: userId }
                        },
                        as: 'isFriend'
                    }]
                }

            ).then(function(dbResults) {
                // console.log(dbResults)
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });

        return $findAllByUser;
    },

    //TBD: //Confirm whether friend userID or friendName needs to be saved
    add: function(friendId, userId) {
        console.log(friendId);
        var $add =
            db.Friend.create({
                userId: userId,
                friendId: friendId,
                createdBy: userId,
                updatedBy: userId
                    // db.user.addFriend({
                    //     userId: userId,
                    //     friendId: friendId

            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $add;
    },
    //TBD:  Remove or approve friend
    edit: function(friend, user) {

        var $edit =
            db.Friend.update({
                friendName: friend.friendName,
                //approved:
                updatedBy: user.id

            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $edit;
    }
}