//Require Mongoose
var mongoose = require('mongoose');
//Create Schema class
var Schema = mongoose.Schema;

//Create article schema
var UserSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    url : {
        type: String,
        required: true
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;