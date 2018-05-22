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

    $("#new-user-firstname").blur(function () {
        //  function Validate() {
        // validate username
        // if ($('#username').value == "") {
        //     $('#username').style.border = "1px solid red";
        //     $('#username').style.color = "red";
        //     $('#name_error').textContent = "Username is required";
        //     $('#username').focus();
        //     return false;
        // }
        if ($("#new-user-firstname").val().length === 0) {
            console.log("nothing in there");
        
            $('#firstname_error').append('<div class="red">Name is Required</div>');
        }
    });

    // validate username
    // if ($('#new-user-firstname').val().length < 3) {
    //     $('#new-user-firstname').style.border = "1px solid red";
    //     $('##new-user-firstname').style.color = "red";
    //     $('#name_error').textContent = "Username must be at least 3 characters";
    //     $('##new-user-firstname').focus();
    //     return false;
    // }
    // // validate email
    // if ($("#email").value == "") {
    //     $("#email").style.border = "1px solid red";
    //     $("#email").style.color = "red";
    //     $('#email_error').textContent = "Email is required";
    //     $("#email").focus();
    //     return false;
    // }
    // // validate password
    // if ($("#password").value == "") {
    //     $("#password").style.border = "1px solid red";
    //     $("#password").style.color = "red";
    //     $("#password-confirm").style.border = "1px solid red";
    //     $('#password_error').textContent = "Password is required";
    //     $("#password").focus();
    //     return false;
    // }
    // // check if the two passwords match
    // if ($("#password").value != $("#password-confirm").value) {
    //     $("#password").style.border = "1px solid red";
    //     $("#password-confirm").style.color = "red";
    //     $("#password-confirm").style.border = "1px solid red";
    //     $('#password_error').innerHTML = "The two passwords do not match";
    //     return false;
    // }

    // console.log("test");

});