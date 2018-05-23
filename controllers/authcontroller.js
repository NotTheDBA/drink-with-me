var exports = module.exports = {}

exports.signup = function(req, res) {
    if (req.user) {
        res.redirect('/dashboard');
    } else {
        res.render('signup');
    }
}

exports.signin = function(req, res) {
    if (req.user) {
        res.redirect('/dashboard');
    } else {
        res.render('signin');
    }
}

exports.dashboard = function(req, res) {

    var hbsObject = {
        user: req.user
    };
    res.render('user-profile', hbsObject);

}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}