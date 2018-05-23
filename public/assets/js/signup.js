$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newUser = {
            username: $("#username").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            repassword: $("#password-confirm").val().trim(),
        };
        console.log(newUser);
        $.ajax("/api/signup", {
            type: "POST",
            data: newUser
        }).then(function () {
            console.log("Added new user: " + newUser);
        });
    });

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $("#new-user-firstname").blur(function () {

        if ($("#new-user-firstname").val().length === 0) {
            $('#firstname_error').append('<div class="red">*Required Field</div>');
            $("#new-user-firstname").focus();
        } else {
            $('#first_error').append('');
        }
    });
    $("#new-user-lastname").blur(function () {

        if ($("#new-user-lastname").val().length === 0) {
            $('#lastname_error').append('<div class="red">*Required Field</div>');
            $("#new-user-lastname").focus();
        } else {
            $('#lastname_error').remove('<div class="red"> *Required field </div>');
        }
    });
    $("#new-user-email").blur(function () {

        if ($("#new-user-email").val().length === 0) {
            $('#email_error').append('<div class="red">*Required Field</div>');
            $("#new-user-email").focus();
        } else if ($("#new-user-email").val() != mailformat) {
            $('#email_error').append('<div class="red">*Invalid Email</div>');
            $("#new-user-email").focus();
         }else {
            $('#email_error').remove('<div class="red"> *Required field </div>');
        }
    });
    $("#new-user-password").blur(function () {

        if ($("#new-user-password").val().length === 0) {
            $('#password_error').append('<div class="red">*Required Field</div>');
            $("#new-user-password").focus();
        } else if ($("#new-user-password").val() != regularExpression) {
            $('#password_error').append('<div class="red">password must between 6-16 char and contain a number,special character and uppercase letter </div>');
            $("#new-user-password").focus();
        } else {
            $('#password_error').remove('<div class="red"> *Required field </div>');
        }
    });
    $("#password-confirm").blur(function () {

        if ($("#password-confirm").val().length === 0) {
            $('#repassword_error').append('<div class="red">*Required Field</div>');
            $("#password-confirm").focus();
        } else {
            $('#repassword_error').remove('<div class="red"> *Required field </div>');
        }
        if ($("#new-user-password").val() != $("#password-confirm").val()) {
            $('#repassword_error').append('<div class="red"> *Password not match </div>');
            $("#password-confirm").focus();
        }
        else {
            $('#repassword_error').remove('<div class="red"> *Password not match </div>');
        }

    });




});