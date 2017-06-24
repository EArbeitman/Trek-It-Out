// Include React
var React = require("react");
var Tourlist = require("./Tourlist");
var Tourmap = require("./Tourmap");

var Tours = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">
              
            <h1>Results Tours</h1>

          </div>
              
        </div>
        {/*End Heading for Tours Display Page*/}

        {/*Begin Tour list and map display for Tours Display Page*/}
        <div className="row">
          <div className="col-lg-5">
            <Tourlist/>
           
          </div>
          <div className="col-lg-7">
            <Tourmap/>
          </div>
        </div>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Tours;
