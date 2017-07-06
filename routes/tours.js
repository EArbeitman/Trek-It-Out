var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Tour = require('../models/Tour');


router.post('/treks', function(req, res) {
  console.log("***************inside the router in treks")
  //console.log(req.body.tour_titlereq.body.tour_category)
	var title = req.body.tour_title;
	var description = req.body.tour_description;
	var category = req.body.tour_category;
	var stops = req.body.tour_stops;
  var city = req.body.tour_city;
  var username = req.body.username;

  // console.log(title);
  // console.log(description);
  // console.log(category);
  // console.log(stops);
  // console.log(city);
  console.log(username);


  var newTour = new Tour({
  	tour_title: title,
  	tour_description: description,
  	tour_category: category,
  	tour_stops: stops,
    tour_city: city,
  	active: true
  });

  newTour.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
      console.log(error);
    }
    // Otherwise
    else {
      console.log(doc);
       //var username = document.cookie.split('=')[1];
       console.log("username " + username);
    	//res.sendStatus(200);
      //Find our user and push the new note id into the User's notes array
      User.findOneAndUpdate({username: username}, { $push: { "tours_created": doc._id }, tours_stops : doc.tours_stops }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          console.log(err);
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });

});

/*
@PARAM req.body.category - category filter for search
@PARAM req.body.city - city filter for search
@RETURN - tour document matching search criteria
*/

router.get("/tours/:category/:city", function(req, res){

  var category = req.params.category;
  var city = req.params.city;

  console.log('category ' + category);
  console.log('city ' + city);

  Tour.find( { $or: [ {tour_city: city}, {tour_category: category}] }, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      console.log(doc);
      res.send(doc);
      //return doc;
    }
  });

});

/* 
@PARAM - req.body.tourid - id grabbed from the tour selected by the user
@RETURN - tours array saved to a specfic tour
*/

router.get("/stops", function(req, res){

  //var tourId = req.body.tourId;
  var tourId = "595935e41b1fb90461f7e899";

  Tour.find({_id : tourId}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc[0].toObject().tours_stops);
      //return doc;
    }
  });

});

module.exports = router;