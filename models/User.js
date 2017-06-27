//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
//Create Schema class
var Schema = mongoose.Schema;

//Create article schema
var UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [
          // Function takes in the value as an argument
        function(input) {
        // If this returns true, proceed. If not, return an error message
        return (input.length >= 6 && input.length <= 10);
         },
        "User id should contain at least 6 characters long and should not contain more than 10 characters."
    ]
      },
    date: {
        type: Date,
        default: Date.now()
    },
    picture : {
        type: String,
        required: true
    },
    email: {
    type: String,
    lowercase: true, // always convert email to lower case
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
    tours_saved: [{
        type: Schema.Types.ObjectId,
        ref: "tour" 
    }],
    tours_created: [{
        type: Schema.Types.ObjectId,
        ref: "tour" 
    }],
    bio: {
        type: String
    },
    interests: {    
        type: Array
    },
})

var User = mongoose.model("User", UserSchema);

module.exports = User;

module.exports.createUser = function(newUser, callback){
    //Use bcrypt to hash password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
