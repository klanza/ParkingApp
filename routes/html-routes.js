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

  // index route -- will load basic front page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/select.html'));
  });

  // Planned route -- display user page, with spots they are renting
//   app.get('/cms', function(req, res) {
//     res.sendFile(path.join(__dirname, ''));
//   });
};
