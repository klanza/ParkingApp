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


  //PUT route for updating parking spot
  // app.put("/api/space/:id", function(req, res) {
  //     db.Space.update(req.body,
  //     {
  //         where: {
  //             id: req.body.id
  //         }
  //     }).then(function(dbSpace) {
  //         Space.updateAttributes({
  //             availability: false,
  //             bookedBy_username: req.body.bookedBy_username,
  //             time_booked: SEQUELIZE.DATE
  //         })
  //         res.json(dbPost);
  //     })
  // })

};