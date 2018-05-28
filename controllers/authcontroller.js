var exports = module.exports = {}

exports.signup = function(req, res) {
    if (req.user) {
        res.redirect('/dashboard');
    } else {
        res.render('signup', { layout: "register" });
    }
}

exports.signin = function(req, res) {
    if (req.user) {
        res.redirect('/dashboard');
    } else {
        res.render('signin', { layout: "register" });
    }
}

exports.dashboard = function(req, res) {

    var hbsObject = {
        user: req.user,
        layout: "main",
        isMe: true
    };
    res.render('user-profile', hbsObject);

}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}