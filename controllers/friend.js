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
    findAllByUser: function(userId) {

        var $findAllByUser = db.Friend.findAll({

                where: {
                    userId: userId
                },
                include: ['user']
            }).then(function(results) {
                console.log(results)
                return results;
            })
            .catch(function(err) {

                return err;
            });

        return $findAllByUser;
    },

    //TODO: //Confirm whether friend userID or friendName needs to be saved
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