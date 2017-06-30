// Include React
var React = require("react");

var Tourmaps = React.createClass({
 getInitialState: function() {
    return {
      mapProp: {
        center:new google.maps.LatLng(52.395715,4.888916),
        zoom:5,

        },

      tourPath: [],

   
      };
  },
  
setTourPath: function() {
  this.setState ({
    tourPath: [ 
      new google.maps.LatLng(58.983991,5.734863),
      new google.maps.LatLng(52.395715,4.888916),
      new google.maps.LatLng(51.508742,-0.120850),
      new google.maps.LatLng(49.508742,-0.120850)
      ]
  })
      

},


 componentDidMount: function() {
 
  var map = new google.maps.Map(document.getElementById("googleMap"), this.state.mapProp)
  this.setState ({
        map: map
  })
  this.setTourPath();
  var 
  newPath = new google.maps.Polyline({
            path: this.state.tourPath,
            strokeColor: "#0000FF",
            strokeOpacity: 0.8,
            strokeWeight: 2
        })
   newPath.setMap(map)

   this.setState({
          flightPath: newPath
      })
 

    
    },

      componentDidUpdate: function() {
    console.log("COMPONENTDID UPDATE prev:");
 
      },
  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">
            <h2>Map for tours</h2>
            <div id="googleMap" 
                 style={{height: "500px",
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
