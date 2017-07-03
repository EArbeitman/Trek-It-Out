
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var Navigation = require("./Navigation");
var Search = require("./Search");
// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
    <div>
        <Navigation/>

        {this.props.children}
   </div> 

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
