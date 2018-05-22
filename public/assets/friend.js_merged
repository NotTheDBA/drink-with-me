module.exports = {


    newDrink: function(req, res) {

        res.render('add-friend');
    },

    getAll: function() {

    
        var $findall = db.friend.findAll({}).then(function(dbResults) {
            
                return dbResults;
            })
            .catch(function(err) {
            
                return err;
            });
    
        return $findall;
    },

    findDrink: function(friend) {

        var $findByFriendName = db.friend.findOne({
                where: {
                    frindName: friend
                }
            }).then(function(results) {

                return results;
            })
            .catch(function(err) {

                return err;
            });
    
        return $findByFriendName;
    },

    add: function(friend, user) {
    
        var $add =
            db.friend.create({
                frindName: friend.frindName,
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
    edit: function(friend, user) {
    
        var $edit =
            db.friend.update({
                frindName: friend.frindName,
                createdBy: user.id,
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