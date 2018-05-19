$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var login = {
            username: $("#name").val().trim(),
            password: $("#password").val().trim(),
        }
    });
    $.ajax("/api/login", {
        type: "POST",
        data: login
    }).then(function () {
        console.log("login user: " + login);
    });
});