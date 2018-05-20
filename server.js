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

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


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

// //Sync Database
// models.sequelize.sync({ force: true }).then(function() {

//     console.log('Nice! Database looks fine')

//     console.log("Listening on http://localhost:%s", PORT)

// }).catch(function(err) {

//     console.log(err, "Something went wrong with the Database Update!")

// });


app.listen(8080, function(err) {

    if (!err)

        console.log("Listening on http://localhost:%s", PORT)

    else console.log(err)

});

// var express = require('express');
// var app = express();
// // var passport = require('passport')
// // var session = require('express-session')
// var bodyParser = require('body-parser')
//     // var exphbs = require('express-handlebars')
//     // var env = require('dotenv').load();

// // //For BodyParser
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // For Passport
// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// //Models
// var models = require("./models");
// //load passport strategies
// require('./config/passport/passport.js')(passport, models.user);

// //For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

// // Static directory
// app.use(express.static("public"));

// // Routes
// // =============================================================
// require('./routes/html-routes.js')(app);
// require('./routes/api-routes.js')(app);

// var authRoute = require('./routes/auth.js')(app, passport);
// //Sync Database
// models.sequelize.sync().then(function() {

//     console.log('Nice! Database looks fine')

// }).catch(function(err) {

//     console.log(err, "Something went wrong with the Database Update!")

// });

// app.get('/', function(req, res) {
//     res.send('Welcome to Passport with Sequelize');
// });


// app.listen(5000, function(err) {

//     if (!err)
//         console.log("Site is live");
//     else console.log(err)

// });

// var PORT = process.env.PORT || 8080

// // db.sequelize.sync({ force: true }).then(function() {
// app.listen(PORT, function() {
//     console.log("Listening on http://localhost:%s", PORT)
//         // });
// })