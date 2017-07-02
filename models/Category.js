//Require Mongoose
var mongoose = require('mongoose');
//Create Schema class
var Schema = mongoose.Schema;

//Create article schema
var CategorySchema = new Schema ({
    name: {
        type: String,
        required: true,
    }
})

var Category = mongoose.model("Category", CategorySchema);

module.exports = Category;