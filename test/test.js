var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server.js');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

var register_details = {
    "name": "Jane Doe",
    "email": "email@email.com",
    "username": "dummy_name",
    "password": "123@abc",
    "repassword": "123@abc",
    "birthdate": "1/1/1980",
};

var login_details = {
    "username": "Jane Doe",
    "password": "123@abc",
    "repassword": "123@abc",
};


//Log in page
describe("API Routes", function () {
    //6
    describe("POST /api/signup", function () {
        it("should take the input from the email, password, and age certification and send to the database", function () {
            chai.request(app)
                .post("/api/signup")
                .send(register_details)
                .end(function (err, res) {
                    res.should.have.status(404);

                })
        })
    });

    //7
    describe("POST /api/login", function () {
        it("should login", function () {
            chai.request(app)
                .post("/api/login")
                .send(login_details)
                .end(function (err, res) {
                    res.should.have.status(200);

                })
        })
    });
    //4
    describe("GET /api/username/:username", function () {
        it("should get the username and information", function () {
            chai.request(app)
                .get("/api/username:username")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //1
    describe("GET /api/all", function () {
        it("should get the list of drinks the user has rated", function () {
            chai.request(app)
                .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
                .then((res) => {
                    res.should.have.status(200);

                })
        });
    });
    //2
    describe("GET /api/drink:drink", function () {
        it("should get name, location, star rating, and text rating, and ingredient list of drink ", function () {
            chai.request(app)
                .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                .then((res) => {
                    res.should.have.status(200);

                })
        });
    });
    //10
    describe("GET /api/friend", function () {
        it("should find a friend for the user to follow", function () {
            chai.request(app)
                .get("/api/friend")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });


    // //Add a drink page
    //8
    describe("POST api/drink", function () {
        it("should take the input from the drink name, location, star rating, and text rating and send it to the db", function () {
            chai.request(app)
                .post("/api/drink")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //3
    describe(" GET /api/ingredient/:ingredient", function () {
        it("should get a list of ingredients from the db to add to our drink", function () {
            chai.request(app)
                .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
                .then((res) => {
                    res.should.have.status(200);
                })
        });
    });

    // //Update a drink page
    //12
    describe("PUT /api/drink", function () {
        it("should upon click update a drink", function () {
            chai.request(app)
                .put("/api/drink")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });


    // //Following list page
    //5
    describe("GET /api/username/:friend", function () {
        it("should get a list of friends the user is following from the db and display on the page", function () {
            chai.request(app)
                .get("/api/username/friend")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });


    // //Add a review to a drink page
    //11
    describe("PUT /api/review", function () {
        it("should add an additional text review to a drink", function () {
            chai.request(app)
                .put("/api/review")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //Post a review of a drink

    //9 
    describe("POST /api/review", function () {
        it("should add a text review to a drink", function () {
            chai.request(app)
                .post("/api/review")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

});
