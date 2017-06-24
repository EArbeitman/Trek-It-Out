// Include React
var React = require("react");

var Profile = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <h2>Tour Lisings in tourlist</h2>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Profile;
