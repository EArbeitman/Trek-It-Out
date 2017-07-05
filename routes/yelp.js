var express = require('express');
var router = express.Router();

'use strict';
 

const yelp = require('yelp-fusion');
const token = 'a5ejY6P8K9Tr7ddpbuCXeJIsTn4S_NUKA7OPg1L3sm7Tjlx_CIM9gXf2muy93Gd0voUfCfgi6P0HAFlDB7bVwAFrGDWpIpjhgasr2L1KIJiO96gjI1vLJi1IH6U4WXYx';

const client = yelp.client(token);


router.get('/geo', function(req, res) { 
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0]
    );
   res.send(response.jsonBody.businesses[0]
    );
}).catch(e => {
  console.log(e);
});

    // var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    // return axios.get(queryURL).then(function(response) {
    //   // If get get a result, return that result's formatted address property
    //   if (response.data.results[0]) {
    //     return response.data.results[0].formatted;
    //   }
    //   // If we don't get any results, return an empty string
    //   return "";
    // });


// console.log("reached the routing file")
// router.get('/g', function(req, res) {
//   console.log("inside the router in treks")
//   console.log(req.body.tour_title+req.body.tour_category)
	// var title = req.body.tour_title;
	// var description = req.body.tour_description;
	// var category = req.body.tour_category;
	// var stops = req.body.tour_stops;
 //  var city = req.body.tour_city;

  // var newTour = new Tour({
  // 	tour_title: title,
  // 	tour_description: description,
  // 	tour_category: category,
  // 	tour_stops: stops,
  //   tour_city: city,
  // 	active: true
  // });

  // newTour.save(function(error, doc) {
  //   // Send any errors to the browser
  //   if (error) {
  //     res.send(error);
  //   }
  //   // Otherwise
  //   else {
  //      var username = document.cookie.split('=')[1]
  //   	//res.sendStatus(200);
  //     //Find our user and push the new note id into the User's notes array
  //     User.findOneAndUpdate({username}, { $push: { "tours_created": doc._id }, tours_stops : doc.tours_stops }, { new: true }, function(err, newdoc) {
  //       // Send any errors to the browser
  //       if (err) {
  //         res.send(err);
  //       }
  //       // Or send the newdoc to the browser
  //       else {
  //         res.send(newdoc);
  //       }
  //     });
  //   }
  // });
});



module.exports = router;