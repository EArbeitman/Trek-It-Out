var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Get homepage
// router.get('/register', function(req, res){
// 	res.render('register');
// });


//Register user
router.post('/register', function(req, res){

	console.log('request ' + req);
	var firstname = req.body.firstname;
	var email = req.body.email;
	var lastname = req.body.lastname;
	var password = req.body.password;
	//var password2 = req.body.password2;

	console.log('firstname ' + firstname);
	console.log('lastname ' + lastname);
	console.log('email ' + email);
	console.log('password ' + password);


	// Valdiation
	// req.checkBody('name', 'Name is required').notEmpty();
	// req.checkBody('email', 'Email is required').notEmpty();
	// req.checkBody('email', 'Email is not valid format').isEmail();
	// req.checkBody('username', 'Username is required').notEmpty();
	// req.checkBody('password', 'Password is required').notEmpty();
	// req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	// var errors = req.validationErrors();

	// if(errors){
	// 	console.log('Failed to validate');
	// 	res.render('register', {
	// 		errors: errors
	// 	});
	// }
	// else{
	// 	var newUser = new User({
	// 		name: name,
	// 		email: email,
	// 		username: username,
	// 		password: password
	// 	});

		var newUser = new User({
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

	// 	//Set success message
	// 	req.flash('success_msg', 'You are registered and can now login');
	// 	res.redirect('/users/login');
	// }


});

// Get username if it matches and validate password

passport.use(new LocalStrategy({
   	usernameField: 'email',
    passwordField: 'password'
	},
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

// router.post('/login', 
// 	passport.authenticate('local'), 
// 	function(req, res){
// 		//console.log("req" + req);
// 		//console.log("res" + res);
// 		console.log("post to login good");
// });

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
  	res.json({authenticated: true});
  	//return true;
  	//res.redirect('/');
  	//return "Hello world";
});

module.exports = router;