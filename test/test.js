var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../routes/api-routes.js');
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

    describe("POST /api/signup", function () {
        it("should take the input from the email, password, and age certification and send to the database", function () {
            chai.request(app)
                .post("/api/signup")
                .send(register_details)
                .end(function (err, res) {
                    res.should.have.status(201);
                    
                })
        })
    });


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

    describe("GET /api/username:username", function () {
        it("should get the username and information", function () {
            chai.request(app)
                .get("/api/username:username")
                .end(function (err, res) {
                    res.should.have.status(200);
                    expect(res.body.state).to.be.true;
                    res.body.data.should.be.an('object');
                    done()
                })
        });
    });

    // describe("GET /api/username/drinks", function () {
    //     it("should upon page load get the list of drinks the user has rated", function () {
    //         // expect
    //     });
    // });

    // describe("GET /api/username/drink", function () {
    //     it("should upon click get the name, location, star rating, and text rating, and ingredient list of drink ", function () {
    //         // expect
    //     });
    // });

    // describe("POST api/friends", function () {
    //     it("should upon input and click find a friend for the user to follow", function () {
    //         // expect
    //     });
    // });


    // //Add a drink page

    // describe("POST api/drink", function () {
    //     it("should take the input from the drink name, location, star rating, and text rating and send it to the db", function () {
    //         // expect
    //     });
    // });

    // describe(" GET /api/drink/ingredients", function () {
    //     it("should get a list of ingredients from the db to add to our drink", function () {
    //         // expect
    //     });
    // });

    // //Update a drink page

    // describe("PUT /api/drink", function () {
    //     it("should upon click update a certain part of the review", function () {
    //         // expect
    //     });
    // });


    // //Following list page
    // describe("GET /api/friend", function () {
    //     it("should get a list of friends the user is following from the db and display on the page", function () {
    //         // expect
    //     });
    // });


    // //Add a review to a drink page

    // describe("POST /api/review", function () {
    //     it("should upon click add an additional text review to a drink", function () {
    //         // expect
    //     });
    // });

    // })

});
