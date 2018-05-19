<<<<<<< HEAD
var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var env = require('dotenv').load();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//Routes
//var authRoute = require('./app/routes/auth.js')(app);
var authRoute = require('./routes/auth.js')(app, passport);

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 
 
app.listen(5000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});
=======
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
// require("./seeders/_coctail-seeds.js");
// check models and start listening
var db = require("./models");
// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("Listening on http://localhost:%s", PORT)
        // });
})
>>>>>>> master
