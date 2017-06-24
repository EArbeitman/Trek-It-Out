// Include React
var React = require("react");

var Register = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Registration Page</h3>
              </div>
              <div className="panel-body">
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Register;
