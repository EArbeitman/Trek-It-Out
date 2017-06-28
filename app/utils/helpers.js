// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  registerUser: function(userData) {
  	console.log('register user called');
    return axios.post("/users/register", userData);
  },

  loginUser: function(userData){
  	//console.log('login user called');
  	//console.log('log post ' + axios.post("/users/login", userData));
  	return axios.post("/users/login", userData);
  }
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  // saveClicks: function(clickData) {
  //   return axios.post("/api", clickData);
  // }
};
