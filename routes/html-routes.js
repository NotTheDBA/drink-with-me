module.exports = function(app) {
    app.get('/', function(req, res) {
        // res.send('Welcome to Passport with Sequelize');

        res.redirect('/signin');
    });
}