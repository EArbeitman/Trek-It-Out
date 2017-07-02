var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Tour = require('../models/Tour');

router.post("/create", function(req, res) {

	var title = req.body.tour_title;
	var description = req.body.tour_description;
	var category = req.body.tour_category;
	var stops = req.body.tours_stops;

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
      User.findOneAndUpdate({}, { $push: { "tours_created": doc._id }, tours_stops : doc.tours_stops }, { new: true }, function(err, newdoc) {
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

router.get("/stops", function(req, res){

  //console.log('tour params ' + req.body.category);

  Tour.find({_id : "5959368d2f37e0047d94ed83"}, function(error, doc) {
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