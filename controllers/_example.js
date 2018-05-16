var db = require("../models");

module.exports = {

    findAll: function(user) {

        // findAll returns all entries for a table when used with no options
        var $findall = db.User.findAll({}).then(function(dbUser) {
            // return our results when the function is called
            return dbUser;
        });
        // This returns a promise to the external code, so it can access our results
        return $findall;
    }


}