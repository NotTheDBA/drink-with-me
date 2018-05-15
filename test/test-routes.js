var expect = require("chai").expect;
var titleize = require("../titleize");

//Log in page

describe("POST /api/signup", function () {
    it("should upon clicking submit take the input from the email, password, and age certification and send to the database", function () {
        // expect
    });
});

describe("POST /api/login", function () {
    it("should upon clicking submit input the user credentials and authenticate", function () {
        // expect
    });
});

//Profile page

describe("GET /api/username", function () {
    it("should upon page load get the username and avatar in top left corner of the user", function () {
        // expect
    });
});

describe("GET /api/username/drinks", function () {
    it("should upon page load get the list of drinks the user has rated", function () {
        // expect
    });
});

describe("GET /api/username/drink", function () {
    it("should upon click get the name, location, star rating, and text rating, and ingredient list of drink ", function () {
        // expect
    });
});

describe("POST api/friends", function () {
    it("should upon input and click find a friend for the user to follow", function () {
        // expect
    });
});


//Add a drink page

describe("POST api/drink", function () {
    it("should take the input from the drink name, location, star rating, and text rating and send it to the db", function () {
        // expect
    });
});

describe(" GET /api/drink/ingredients", function () {
    it("should get a list of ingredients from the db to add to our drink", function () {
        // expect
    });
});

//Update a drink page

describe("PUT /api/drink", function () {
    it("should upon click update a certain part of the review", function () {
        // expect
    });
});


//Following list page
describe("GET /api/friend", function () {
    it("should get a list of friends the user is following from the db and display on the page", function () {
        // expect
    });
});


//Add a review to a drink page

describe("POST /api/review", function () {
    it("should upon click add an additional text review to a drink", function () {
        // expect
    });
});


