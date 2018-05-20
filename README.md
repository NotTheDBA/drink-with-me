# drink-with-me

# Setup
* Edit the file config/config.json and change the UserName and Password in the development configurations to be a valid login for your mySQL server.
* Run the file .setup/DB/schema.sql on your mySQL server.


# Example execution (post back)

## View
/views/add-place.hbs - uses handlebars, action="/api/place" Notice we don't need to write any jQuery for the form submit!

## Routing
/routes/api-routes.js - defines app.post("/api/place",...), which calls place.add(req.body, req.user)

## Controller
/controllers/place.js - defines add: function(place, user) - place and user are passed in from req.body and req.user in the Routing.   This function calls db.Place.create

## Model
/models/place.js - defines the model hierarchy managed by Sequelize.

# Notes

### !! Important !!

Do not use `node server` to start the program!  

Use `npm start` or `npm start dev` instead; This is necessary to update the database and apply seeds to pre-populate some table data (just drink categories, right now...).

Please note that the models and controllers should mostly be created.   The controllers and routing are largely done, but may need to be modified to pass the req.user for some calls.

Forms will need to be built and styled.