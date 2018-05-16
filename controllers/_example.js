var db = require("../models");

module.exports = {

    //   //template
    // functionName: function(parm) {
    //     // functionName does something
    //     var $functionName = db.User.findAll({}).then(function(results) {
    //         // return our results from the function
    //         return results;
    //     });
    //     // This returns a promise to the external code, so it can access our results
    //     return $functionName;
    // }

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