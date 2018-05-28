var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server.js');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

var req = "dummy";
//Log in page
describe("API Routes", function () {
    //1
    describe("GET /api/category", function () {
        it("#1 should get a drink category", function () {
            chai.request(app)
                .get("/api/category")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;

                })
        });
    });
    //2
    describe("POST /api/category", function () {
        it("#2 should add a drink category", function () {
            chai.request(app)
                .post("/api/category")
                .send(req)
                .then((res) => {
                    res.should.have.status(200);
                    res.should.redirect;

                })
        });
    });
    //3
    describe("GET /api/drink:drink", function () {
        it("#3 should get name, location, star rating, and text rating, and ingredient list of drink ", function () {
            chai.request(app)
                .get("/api/drink/:drink")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;

                })
        });
    });
    //6
    describe("DELETE /api/friend:id", function () {
        it("#4 should remove friend", function () {
            chai.request(app)
                .delete("/api/friend:id")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //8
    describe("POST /api/friend", function () {
        it("#5 should accept friend", function () {
            chai.request(app)
                .post("/api/friend")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //7
    describe("GET /api/friend:friend", function () {
        it("#6 should find all friend requests", function () {
            chai.request(app)
                .post("/api/friend")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

    // //Add a drink page
    //4
    describe("POST api/drink", function () {
        it("#7 should add a drink", function () {
            chai.request(app)
                .post("/api/drink")
                .then((res) => {
                    res.should.have.status(200)
                        .end(err, res)
                    res.header['location'].should.include('/home')
                    done()
                })
        });
    });
    //9
    describe("POST /api/ingredient", function () {
        it("#8 should add ingredient", function () {
            chai.request(app)
                .post("/api/ingredient")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //10
    describe("GET /api/ingredient", function () {
        it("#9 should find all ingredientst", function () {
            chai.request(app)
                .get("/api/ingredient")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
    //11
    describe(" GET /api/ingredient/:ingredient", function () {
        it("#10 should find ingredient by name", function () {
            chai.request(app)
                .get("/api/ingredient/:ingredient")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

    //5
    describe("GET /api/friend/:user", function () {
        it("#11 should get a list of friends the user is following from the db and display on the page", function () {
            chai.request(app)
                .get("/api/username/friend")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

     //12
     describe("GET /api/part/:drink", function () {
        it("#12 should find all parts by drinkID", function () {
            chai.request(app)
                .get("/api/part/:drink")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
     //13
     describe("POST /api/part", function () {
        it("#13 should add a drink part", function () {
            chai.request(app)
                .post("/api/part")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

     //14
     describe("GET /api/place", function () {
        it("#14 should get all places", function () {
            chai.request(app)
                .get("/api/place")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });
     //15
     describe("POST /api/place", function () {
        it("#15 should add a place", function () {
            chai.request(app)
                .post("/api/place")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

    //16
    // describe("GET /api/review/:parm", function () {
    //     it("#16 should get all places", function () {
    //         chai.request(app)
    //             .get("/api/place")
    //             .then((res) => {
    //                 res.should.have.status(200);
    //                 res.should.be.json;
    //             })
    //     });
    // });
    //17
    describe("POST /api/review", function () {
        it("#17 should add a text review to a drink", function () {
            chai.request(app)
                .post("/api/review")
                .then((res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                })
        });
    });

});
