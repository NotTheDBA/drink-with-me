var express = require("express");
var db = require("./models");

var PORT = process.env.PORT || 8080
var app = express();

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on http://localhost:%s", PORT)
    });

})