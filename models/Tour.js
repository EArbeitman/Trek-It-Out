//Require Mongoose
var mongoose = require('mongoose');
//Create Schema class
var Schema = mongoose.Schema;

//Create article schema
var TourSchema = new Schema ({
    tour_title: {
        type: String,
        required: true
    },
    tour_description: {
        type: String,
        required: true
      },
    tour_category: {
        type: Array
    },
    tour_city: {
        type: String
    },
    active: Boolean,
    tours_stops: {
        type: Array,
        "default": []
    }
})

var Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;