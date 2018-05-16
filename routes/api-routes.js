
// var db = require("../models");
var request = require("request");

module.exports = function (app) {

  app.get("/api/all", function (request, response) {
    request("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function (res) {
      console.log(res);
    });
  });

  app.get("/api/drink/:drink", function (request, response) {
    if (request.params.drink){
    request("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", function (res) {
        console.log(res);
    
      });
    }
  });
  app.get("/api/ingredient/:ingredient", function (request, response) {
    if (request.params.ingredient){
    request("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function (res) {
        console.log(res);
      });
    }
  });
  app.get("/api/username/:username", function (request, response) {
    db.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(function () {
        res.json();
      });
  });
  app.get("/api/username/:friend", function (req, res) {
    db.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(function () {
        res.json();
      });
  });

  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      repassword: req.body.repassword,
      birthdate: req.body.birthdate,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/login", function (req, res) {
    console.log(req.body);
    db.create({
      username: req.body.username,
      password: req.body.password,
      repassword: req.body.repassword,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/drink", function (req, res) {
    console.log(req.body);
    db.create({
      drink: req.body.drink,
      ingredient: req.body.ingredient,
      location: req.body.location,
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/review", function (req, res) {
    console.log(req.body);
    db.create({
      review: req.body.review,
      ratings: req.body.ratings
    })
      .then(function () {
        res.json();
      });
  });
  app.post("/api/friend", function (req, res) {
    console.log(req.body);
    db.create({
      username: req.body.username,

    })
      .then(function () {
        res.json();
      });
  });


  app.put("/api/review", function (req, res) {
    db.update(req.body,
      {
        where: {
          review: req.body.review
        }
      })
      .then(function () {
        res.json();
      });
  });
  app.put("/api/drink", function (req, res) {
    db.update(req.body,
      {
        where: {
          drink: req.body.drink
        }
      })
      .then(function () {
        res.json();
      });
  });

};