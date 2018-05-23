var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.PASSPORT_SECRET) {
    var secret = process.env.PASSPORT_SECRET
} else {
    var secret = 'keyboard cat'
}
// For Passport
app.use(session({
    secret: secret,
    // secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Static directory
app.use(express.static("public"));

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);


var PORT = process.env.PORT || 8080

app.listen(PORT, function(err) {

    if (!err)

        console.log("Listening on http://localhost:%s", PORT)

    else console.log(err)

});

//Sync Database
// models.sequelize.sync({ force: true }).then(function() {
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')
    console.log("Listening on http://localhost:%s", PORT)

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

module.exports = app;