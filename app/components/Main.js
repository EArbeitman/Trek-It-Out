
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var Navigation = require("./Navigation");
// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
    <div>
    <div>
        <Navigation/>

   </div>
   <section id="intro" className="intro">
    <div className="row">
      <div className="container">

        {/* Added this.props.children to dump all of the child components into place */}
        {this.props.children}

      </div>
    </div>
    </section>
   </div> 

   
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
