var express 			= require('express');
var bodyParser 			= require("body-parser");
var logger 				= require("morgan");
var mongoose 			= require('mongoose');
var path 				= require('path');
var cookieParser 		= require('cookie-parser');
var exphbs 				= require('express-handlebars');
var expressValidator 	= require('express-validator');
var flash 				= require('connect-flash');
var session 			= require('express-session');
var passport 			= require('passport');
var LocalStrategy 		= require('passport-local').Strategy;
var mongo 				= require('mongodb');

//-------------- Express Configuration ------------------------//

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());

app.use(express.static("./public"));

// Express Session
app.use(session({
	secret: 'secret', //what is this?
	saveUninitialized: true,
	resave: true
}));

// Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//--------------------------- MONGOOSE -----------------------------//

 // if (process.env.MONGODB_URI) {
 //   mongoose.connect(process.env.MONGODB_URI)
 // } else {
 //  mongoose.connect('mongodb:ds129422.mlab.com:29422/heroku_b2rft21n');
 // }

//local db
// mongoose.connect('mongodb://localhost/trekItOutDev');

//mlab uri - mongodb://trekitout:trekitout@ds129422.mlab.com:29422/heroku_b2rft21n
mongoose.connect('mongodb://trekitout:trekitout@ds129422.mlab.com:29422/heroku_b2rft21n');

// Import User model
//var User = require('./models/User.js')

// Init mongodb
mongoose.Promise = Promise;
var db = mongoose.connection;

// Show any Mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//------------ Passport, Flash, and Global Vars -------------------//

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash for messaging
app.use(flash());

// Declare global vars to be used by app 
app.use(function (req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

//--------------------------- ROUTES ------------------------------//

var routes = require('./routes/index');
var users  = require('./routes/users');

app.use('/', routes);
app.use('/users', users);

//app listening...
app.listen(PORT,function() {
    console.log('App is listening at ' + PORT);
})





