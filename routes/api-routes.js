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
  
  //PUT route for updating booked parking spot 
  app.put("/api/space/:id", function(req, res) {
  	db.Space.findOne( 
  	{
  		where: {
  			id: req.params.id
  		}
  	})
  	.then(function(dbSpace) {
  		dbSpace.updateAttributes({
  			availability: false,
  			bookedBy_username: req.body.bookedBy_username,
  			time_booked: req.body.date
  		});
  		// res.json(dbSpace);
  	})
  })
  //PUT route for updating leaving a parking spot
  app.put("/api/vacate/:id", function(req, res) {
  	db.Space.findOne( 
  	{
  		where: {
  			id: req.params.id
  		}
  	})
  	.then(function(dbSpace) {
  		dbSpace.updateAttributes({
  			availability: true,
  			bookedBy_username: "",
  			time_booked: ""
  		});
  		// res.json(dbSpace);
  	})
  })
  //DELETE parking spot
  app.delete("/api/delete/:id", function(req, res) {
    db.Space.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      // res.json(dbPost);
      console.log("Parking spot deleted")
    }).catch(function(e) {
      console.warn(e);

  app.get("/space-info", function(req, res) {
    db.Space.findAll({})
    .then(function(dbSpace) {
      res.json(dbSpace);
    });
  });
};
