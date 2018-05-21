var db = require("../models");

module.exports = {


    newFriend: function(req, res) {

        res.render('add-friend');
    },

    //TODO: //Find By Username
    //TODO: //Find By Email
    // getAll: function() {

    //     var $getAll = db.friend.findAll({}).then(function(dbResults) {

    //             return dbResults;
    //         })
    //         .catch(function(err) {

    //             return err;
    //         });

    //     return $getAll;
    // },
    //Find all user's friends
    findAllByUser: function(user) {

        var $findAllByUser = db.Friend.findAll({

                where: {
                    userID: user.id
                }
            }).then(function(results) {

                return results;
            })
            .catch(function(err) {

                return err;
            });

        return $findAllByUser;
    },

    //TODO: //Confirm whether friend userID or friendName needs to be saved
    add: function(friend, user) {

        var $add =
            db.Friend.create({
                friendName: friend.friendName,
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
    //TODO:  Remove or approve friend
    edit: function(friend, user) {

        var $edit =
            db.friend.update({
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