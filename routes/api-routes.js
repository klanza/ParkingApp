var db = require("../models");

//Routes
module.exports = function(app) {

  // POST route for saving a new post
  app.space("/api/space", function(req, res) {
    db.Space.create(req.body).then(function(dbSpace) {
      res.json(dbSpace);
    });
  });

};