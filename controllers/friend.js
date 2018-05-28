var db = require("../models");

module.exports = {


    newFriend: function(req, res) {

        res.render('add-friend');
    },

    //TBD: //Find By Username
    //TODO: //Find By Email
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

        var $findAllByUser = db.user.findAll(
                // {
                //     include: [{
                //         model: db.Friend,
                //         through: { 
                //             where: { userId: userId }
                //         }
                //     }]
                // }
            ).then(function(dbResults) {
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