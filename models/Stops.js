//Require Mongoose
var mongoose = require('mongoose');
//Create Schema class
var Schema = mongoose.Schema;

//Create article schema
var StopsSchema = new Schema ({
    location_name: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true
      },
    latitude: {
        type: String,
        required: true
      },
})

var Stops = mongoose.model("Stops", StopsSchema);

module.exports = Stops;