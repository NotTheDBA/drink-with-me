module.exports = {


    newDrink: function(req, res) {

        res.render('add-review');
    },

    getAll: function() {

    
        var $findall = db.review.findAll({}).then(function(dbResults) {
            
                return dbResults;
            })
            .catch(function(err) {
            
                return err;
            });
    
        return $findall;
    },

    findDrink: function(review) {

        var $findByReview = db.review.findOne({
                where: {
                    review: review
                }
            }).then(function(results) {

                return results;
            })
            .catch(function(err) {

                return err;
            });
    
        return $findByReview;
    },

    add: function(review, user) {
    
        var $add =
            db.review.create({
                review: review.review,
                type: review.type,
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