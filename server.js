// Require NPM packages for program functionality
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
// require('dotenv').config();
// Port that site is to be accessed on, process.env.PORT is included to allow
// site to be deployed using heroku or other methods
const PORT = process.env.PORT || 8000;

// Requiring our models for syncing
const db = require('./models');

// Create variable for express, used to serve content
const app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded, allowing HTML to be managed easily
app.use(bodyParser.urlencoded({extended: false}));

// Parse application/JSON objects into easily readable forms
app.use(bodyParser.json());

// Included to allow handlebars templating functionality, labels the 'main'
// page to be the default HTML template
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// const routes = require('html-routes.js');

// app.use(routes);

// Sync sequelize models and start app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
