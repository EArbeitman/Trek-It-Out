// Include React
var React = require("react");

var Tourmaps = React.createClass({
 getInitialState: function() {
    return {

      tourPath: this.props.tourPath,
      prevPath: this.props.tourPath
    //   mapProp: {
    //     center:new google.maps.LatLng(this.props.centerLat,this.props.centerLng),
    //     zoom:this.props.zoom

    //     },
    // tourPath: this.props.tourPath
 
      };
  },
  
componentDidMount: function() {
 
  
  var mapProp = {
        center:new google.maps.LatLng(this.props.centerLat,this.props.centerLng),
        zoom:this.props.zoom

        }
   
 
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
  this.setState ({
        map: map
  })
   
   map.setCenter(this.findCenter());

   this.showAllTreks(map)
 
    },


showOneTrek: function(map) {
  var path = this.props.tourPath[0];
  for (var i = 0; i<path.length; i++){
       var myCenter = path[i];
       var marker = new google.maps.Marker({position: myCenter});

             marker.setMap(map);
           
         // this.setState({
         //        flightPath: newPath
         //    })
       
      }
      

},

showAllTreks: function(map) {
  console.log("settour path executing +++++")
        for (var i = 0; i<this.props.tourPath.length; i++){
       
            var path = this.props.tourPath[i];
        
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

findCenter: function(){
var bound = new google.maps.LatLngBounds();

for (var i = 0; i < this.props.trekList.length; i++) {
  var tempTrek = this.props.trekList[i].tours_stops;
  for (var t = 0; t < tempTrek.length; t++) {
    console.log(tempTrek[t].latitude + tempTrek[t].longitude )
    bound.extend( new google.maps.LatLng(tempTrek[t].latitude, tempTrek[t].longitude) );
  }
 
}

 console.log(bound)
return bound.getCenter();

},

removePath: function(map) {
  console.log("settour path executing +++++" + this.props.pathArray.length)
        for (var i = 0; i<this.props.pathArray.length; i++){
       
            var path = this.props.pathArray[i];
        
            var newPath = new google.maps.Polyline({
                  path: path,
                  strokeColor: "#0000FF",
                  strokeOpacity: 0.8,
                  strokeWeight: 2
              });
         newPath.setMap(null);

         this.setState({
                flightPath: newPath
            })
       
      }
      

},

componentDidUpdate: function() {
  if (this.props.tourPath !== this.state.prevPath) {
     console.log("COMPONENTDID UPDATE: tourmap" + this.props.tourPath.length + '???????????');
     this.setState ({
        tourPath: this.props.tourPath,
        prevPath: this.props.tourPath
      }) 

      var mapProp = {
      center:new google.maps.LatLng(this.props.centerLat,this.props.centerLng),
      zoom:this.props.zoom

      }

 
      var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
      this.setState ({
            map: map
      })

       if (this.props.tourPath.length === 1){
          this.removePath()
          this.showOneTrek(map)
      }else
      {
        this.showAllTreks(map)
      }
    }
},
  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">
 
          <div className="col-lg-12 headerText">
            <div id="googleMap" 
                 style={{height: "500px",
                          width: "50%"}} 
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
