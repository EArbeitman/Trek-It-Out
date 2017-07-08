// Include React
var React = require("react");

var Tourmaps = React.createClass({
 getInitialState: function() {
    return {
      mapProp: {
        center:new google.maps.LatLng(this.props.centerLat,this.props.centerLng),
        zoom:this.props.zoom,

        },
 


   
      };
  },
  
showAllTreks: function(map) {
  console.log("settour path executing +++++")
        for (var i = 0; i<this.state.tourPath.length; i++){
       
            var path = this.state.tourPath[i];
        
            var newPath = new google.maps.Polyline({
                  path: path,
                  strokeColor: "#0000FF",
                  strokeOpacity: 0.8,
                  strokeWeight: 2
              });
         newPath.setMap(map);

         this.setState({
                flightPath: newPath
            })
       
      }
      

},

     
 componentDidMount: function() {
       var lat = this.props.centerLat;
       var lng = this.props.centerLng;
console.log("+++++++++ MAP " + this.props.index)
       this.setState ({
            tourPath: this.props.tourPath,
            mapProp: {
              center:new google.maps.LatLng(lat,lng),
              zoom:5,

              },
       })
       console.log("mapprop " + JSON.stringify(this.state.mapProp))
       console.log("latlng " + lat  + " " + lng);
        var map = new google.maps.Map(document.getElementById("googleMap"), this.state.mapProp)
        this.setState ({
              map: map
        })

          this.showAllTreks(map)
 
          
          },

 componentWillReceiveProps: function() {
       var lat = this.props.centerLat;
       var lng = this.props.centerLng;
console.log("+++++++++ MAP " + this.props.index)
       this.setState ({
             tourPath: this.props.tourPath,
             mapProp: {
              center:new google.maps.LatLng(lat,lng),
              zoom:5


              }
       })

          
          },

 componentDidUpdate: function() {
       console.log("mapprop " + JSON.stringify(this.state.mapProp))
       console.log("latlng " + lat  + " " + lng);
        var map = new google.maps.Map(document.getElementById("googleMap"), this.state.mapProp)
        this.setState ({
              map: map
        })

          this.showAllTreks(map)

 },

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-5">
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
