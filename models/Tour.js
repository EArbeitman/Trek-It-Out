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
    tour_category: [{
        type: Schema.Types.ObjectId,
        ref: "Category" 
    }],
    active: Boolean,
    tours_stops: [{
        type: Schema.Types.ObjectId,
        ref: "Stops" 
    }]
})

var Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;