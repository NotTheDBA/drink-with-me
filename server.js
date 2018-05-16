var express = require("express");
var bodyParser = require("body-parser");
// var db = require("./models");

var PORT = process.env.PORT || 8080
var app = express();

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("Listening on http://localhost:%s", PORT)
});

// })