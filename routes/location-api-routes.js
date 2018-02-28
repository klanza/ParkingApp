// ****************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving
// data to the db
// ****************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the locations available for rent
  app.get('/api/posts', function(req, res) {
  });

  // POST route for saving a new location to be rented
  app.post('/api/posts', function(req, res) {
  });

  // DELETE route for deleting locations that are no longer being rented out
  app.delete('/api/posts/:id', function(req, res) {
  });

  // PUT route for updating locations as being available or unavailable
  app.put('/api/posts', function(req, res) {
  });
};
