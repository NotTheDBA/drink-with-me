module.exports = {


    newDrink: function(req, res) {

        res.render('add-drink');
    },

    getAll: function() {

    
        var $findall = db.drink.findAll({}).then(function(dbResults) {
            
                return dbResults;
            })
            .catch(function(err) {
            
                return err;
            });
    
        return $findall;
    },

    findDrink: function(drink) {

        var $findByDrinkName = db.drink.findOne({
                where: {
                    drinkName: drink
                }
            }).then(function(results) {

                return results;
            })
            .catch(function(err) {

                return err;
            });
    
        return $findByDrinkName;
    },

    add: function(drink, user) {
    
        var $add =
            db.drink.create({
                drinkName: drink.drinkName,
                type: drink.type,
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

    edit: function(drink, user) {
    
        var $edit =
            db.drink.update({
                drinkName: drink.drinkName,
                type: drink.type,
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