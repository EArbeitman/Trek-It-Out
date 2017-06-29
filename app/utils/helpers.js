// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  registerUser: function(userData) {
    return axios.post("/users/register", userData);
  },

  loginUser: function(userData){
  	return axios.post("/users/login", userData);
  }

};
