// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  registerUser: function(userData) {
    return axios.post("/users/register", userData);
  },

  loginUser: function(userData){
  	return axios.post("/users/login", userData);
  },

  getUser: function(searchParams){
  	return axios.get("/users/profile/"+ searchParams.username);
  },
  
  viewTours: function(searchParams){

  	return axios.get("/tours/tours/"+ searchParams.category + "/" +searchParams.city);
  },

  getStops: function(){
  	return axios.get("/tours/stops");
  },

  getGeo: function(searchParams){
  
  	return axios.get("/yelp/geo/"+searchParams.term+"/"+searchParams.location);
  },


  newTour: function(trekParams){
  	console.log("inside new Tour")
  	return axios.post("/tours/treks", trekParams);
  },



};
