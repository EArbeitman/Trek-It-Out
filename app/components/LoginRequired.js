// Include React
var React = require("react");


var LoginRequired = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className ="alert alert-danger">
        <h2>You must log in before creating a trek</h2>
      </div>
           
    );
  }
});

// Export the component back for use in other files
module.exports = LoginRequired;
