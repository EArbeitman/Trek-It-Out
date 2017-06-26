// Include React
var React = require("react");
var Tourlist = require("./Tourlist");
var Tourmap = require("./Tourmap");

var Tours = React.createClass({
  getInitialState: function() {
    return {
      action: 'alltours',
      trekList: [
        {name: 'trek1', description: 'This is trek1', places: ['place1', 'place2', 'place3', 'place4']},
        {name: 'trek2', description: 'This is trek2', places: ['place1', 'place2', 'place3']}
        ],

      mapProp: {
        center:new google.maps.LatLng(52.395715,4.888916),
        zoom:5,

        },
      tourPath: [
       new google.maps.LatLng(58.983991,5.734863),
       new google.maps.LatLng(52.395715,4.888916),
       new google.maps.LatLng(51.508742,-0.120850),
       new google.maps.LatLng(49.508742,-0.120850)
        ]
   
      };
  }, 
               
  // Here we render the component
  render: function() {

    return (
    <section id="intro">
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
            <Tourlist name='treks' data={[
              {name: 'trek1', description: 'This is trek1', places: ['place1', 'place2', 'place3']},
              {name: 'trek2', description: 'This is trek2', places: ['place1', 'place2', 'place3']}
              ]}
              action = {this.state.action}
               />
              }
           
          </div>
          <div className="col-lg-7">
            <Tourmap 
                     mapProp = {this.state.mapProp}
                     tourPath = {this.state.tourPath}/>
          </div>
        </div>

      </div>
      </section>

    );
  }
});

// Export the component back for use in other files
module.exports = Tours;
