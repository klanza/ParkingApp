// ****************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the
// various html pages
// ****************************************************************************

// Dependencies
// =============================================================
const path = require('path');

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes handle the HTML page that the user gets sent to.

  // index route -- will load basic front page to direct you to select/new
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // rental route -- allow users to rent a space and reserve it for themselves
  app.get('/rent', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/select.html'));
  });

  // space creation route -- allows users to create a new space to be added
  app.get('/new', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/new-space.html'));
  });

  // Planned route -- display user page, with spots they are renting
  // REQ.PARAMS FOR THIS
  app.get('/checkout/:id', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/checkout.html'));
  });
};
