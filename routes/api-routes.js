var db = require('../models');

// Routes
module.exports = function(app) {
  // POST route for saving a new post
  app.post('/api/space', function(req, res) {
    db.Space.create(req.body).then(function(dbSpace) {
      res.json(dbSpace);
      console.log(dbSpace.dataValues);
    });
  });
  app.get("/space-info", function(req, res) {
    db.Space.findAll({})
    .then(function(dbSpace) {
      res.json(dbSpace);
    });
  });
};
