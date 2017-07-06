var express = require('express');
var router = express.Router();
var User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Register user
router.post('/register', function(req, res){

	var firstname = req.body.firstname;
	var email = req.body.email;
	var lastname = req.body.lastname;
	var password = req.body.password;
	var username = req.body.username;

	// Valdiation
	req.checkBody('firstname', 'Name is required').notEmpty();
	req.checkBody('lastname', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid format').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		console.log('Failed to validate');
	}
	else{
		var newUser = new User({
			firstname: firstname,
			lastname: lastname,
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(" user route " + user);
		});

		//Set success message
		//req.flash('success_msg', 'You are registered and can now login');
		//res.redirect('/users/login');
	}


});

// Get username if it matches and validate password

passport.use(new LocalStrategy(

  function(username, password, done) {
  	console.log("authentication gets called");
  	User.getUserByUsername(username, function(err, user){
  		if(err) throw err;
  		if(!user){
  			return done(null, false, {message: 'Unknown User'});
  		}

  		User.comparePassword(password, user.password, function(err, isMatch){
  			if(err) throw err;
  			if(isMatch){
  				return done(null, user);
  			} else {
  				return done(null, false, {message: 'Invalid password'});
  			}
  		});
  	});
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
  	res.json({authenticated: true});
});

router.get("/profile/:user", function(req, res){

  var user = req.params.user;

  User.find({username: user}, function(error, doc) {
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

router.get("/", function(req, res) {
  User.find({})
    // ..and on top of that, populate the notes (replace the objectIds in the notes array with bona-fide notes)
    .populate("tours_created")
    // Now, execute the query
    .exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        res.send(doc);
      }
    });
});

module.exports = router;