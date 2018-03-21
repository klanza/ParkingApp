const db = require('../models');
const nodemailer = require('nodemailer');

// Routes
module.exports = function(app) {
  // GET route for viewing all spots
  app.get('/space-info', function(req, res) {
    db.Space.findAll({})
      .then(function(dbSpace) {
        res.json(dbSpace);
      });
  });

  // GET route for viewing a single spot
  app.get('/api/space/:id', function(req, res) {
    db.Space.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function(dbSpace) {
        res.json(dbSpace);
      });
  });


  // POST route for saving a new post
  app.post('/api/space', function(req, res) {
    db.Space.create(req.body).then(function(dbSpace) {
      res.json(dbSpace);
      console.log(dbSpace.dataValues);
    });
  });

  // PUT route for updating booked parking spot
  app.put('/api/space/', function(req, res) {
    db.Space.update(req.body,
      {
        where: {
          id: req.body.id,
        },
      })
      .then(function(dbSpace) {
        // Email Sender
        return db.Space.findOne(
          {
            where: {
              id: req.body.id,
            },
          })
          .then(function(dbSpace) {
            res.json(dbSpace);
            console.log(dbSpace);
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'park.place.app2@gmail.com',
                pass: 'parkplacepassword',
              },
            });

            let mailOwner = {
              from: 'park.place.app2@gmail.com',
              to: dbSpace.owner_username,
              subject: 'Your Space Has been booked',
              text: 'Your space has been booked by ' + dbSpace.bookedBy_username + '.',
            };

            let mailRenter = {
              from: 'park.place.app2@gmail.com',
              to: dbSpace.bookedBy_username,
              subject: 'You have booked a space at ' + dbSpace.address + '!',
              html: '<h1>Thanks for Using Park Place</h1><p>When you are done with your space, please check out at the link below. </p>' +
                '<br/> <a href="https://parkez.herokuapp.com/checkout/' + dbSpace.id + '">Check Out at Park Place</a>',
              // text: 'The price per hour of the space you have rented is $' + dbSpace.price + '/hr.',
            };

            transporter.sendMail(mailOwner, function(error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
            transporter.sendMail(mailRenter, function(error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          });
      });
  });
  // PUT route for updating leaving a parking spot
  app.put('/api/vacate/', function(req, res) {
    db.Space.update(req.body,
      {
        where: {
          id: req.body.id,
        },
      })
      .then(function(dbSpace) {
        // Email Sender
        return db.Space.findOne(
          {
            where: {
              id: req.body.id,
            },
          })
          .then(function(dbSpace) {
            res.json(dbSpace);
            console.log(dbSpace);
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'park.place.app2@gmail.com',
                pass: 'parkplacepassword',
              },
            });

            let mailOwner = {
              from: 'park.place.app2@gmail.com',
              to: dbSpace.owner_username,
              subject: 'Your Space is now open!',
              text: 'Your space has been vacated and is now available for rent again!',
            };
            transporter.sendMail(mailOwner, function(error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          });
      });
  });

  // DELETE parking spot
  app.delete('/api/delete/:id', function(req, res) {
    db.Space.destroy({
      where: {
        id: req.body.id,
      },
    }).then(function(dbPost) {
      console.log('Parking spot deleted');
    }).catch(function(e) {
      console.warn(e);
    });
  });
};
