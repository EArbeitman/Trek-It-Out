var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Tour = require('../models/Tour');

router.post("/create", function(req, res) {
  // Use our Note model to make a new note from the req.body
  console.log('body ' + req.body);

	var title = req.body.tour_title;
	var description = req.body.tour_description;
	var category = req.body.tour_category;
	var stops = req.body.tours_stops;

	console.log("title " + title);
	console.log("description " + description);
	console.log("category " + category);
	console.log("stops " + stops);

  //res.sendStatus(200);
  var newTour = new Tour({
  	tour_title: title,
  	tour_description: description,
  	tour_category: category,
  	tours_stops: stops,
  	active: true
  });

  //console.log("new tour object " + newTour);
  //Save the new note to mongoose
  newTour.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
    	//res.sendStatus(200);
      //Find our user and push the new note id into the User's notes array
      User.findOneAndUpdate({}, { $push: { "tours_created": doc._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
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

router.get("/search", function(req, res){

  //console.log('tour params ' + req.body.category);

  Tour.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
      //return doc;
    }
  });

});

module.exports = router;