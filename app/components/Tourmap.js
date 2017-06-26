// Include React
var React = require("react");

var Tourmaps = React.createClass({
 

 componentDidMount: function() {
  var map = new google.maps.Map(document.getElementById("googleMap"), this.props.mapProp)
  this.setState ({
        map: map
  })
  var newPath = new google.maps.Polyline({
            path: this.props.tourPath,
            strokeColor: "#0000FF",
            strokeOpacity: 0.8,
            strokeWeight: 2
        })
   newPath.setMap(map)

   this.setState({
          flightPath: newPath
      })
 

    
    },
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
            </div>
           </div>
        </div>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Tourmaps;
