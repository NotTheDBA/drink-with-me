$(document).ready(function () {

    var url = window.location.search;
    var findUser;
    var updateData = false;

    var drink = $("#drink");
    var location = $("#location");
    var rating = $("#rating");
    var avgRating = $("#rating");
    var userName = $("#username");
  
    if (url.indexOf("?username=") !== -1) {
        findUser = url.split("=")[1];
        getUser(findUser);
      }
      function getUser(user) {
        $.get("/api/user/" + user, function(data) {
          if (data) {
        
            userName.val(data.username);
            drink.val(data.drink);
            location.val(data.location);
            rating.val(data.rating);
            avgRating.val(data.avgRating);
        
            updateData = true;
          }
        });
      }
    

});