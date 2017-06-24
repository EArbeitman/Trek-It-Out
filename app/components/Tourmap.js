// Include React
var React = require("react");

var Profile = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">
            <h2>Map for tours</h2>
            <div id="googleMap" 
                 style={{height: "400px",
                          width: "100%"}} 
                >
                 {/*} src= {{"https://maps.googleapis.com/maps/api/js?key= AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&callback=myMap"}}
                 // >{*/}
            </div>
           </div>
        </div>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Profile;
