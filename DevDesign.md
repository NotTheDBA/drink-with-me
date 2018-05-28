

# Example execution
### (retrieve and show)

## View

/views/show-place.hbs - uses handlebars, action="/place"

## Routing
/routes/html-routes.js - defines app.get("/place/",...), which calls place.getAll(), then constructs a handlebars data object and renders "show-place".

## Controller
/controllers/place.js - defines getAll: function() which then calls db.Place.findAll

## Model
/models/place.js - defines the model hierarchy managed by Sequelize.

# Notes

Note that this uses the {{#each places}} handlebars syntax, and uses .hbs extensions for the file names instead of .handlebars.  This should also be modified to use layouts and partials.

I think we can use this syntax for the profile by adding multiple data objects to the app.get routes call and passing them all to the render. 

- - - 
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

- - - 
[Read Me](ReadMe.md)