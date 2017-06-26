// Include React
var React = require("react");
var Displaytour = require("./Displaytour");

var Tourlist = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">
        <h2>Tour Lisings in tourlist</h2>
          <ul>{this.props.data.map(function(tour, i){
              
              return <Displaytour key={i} data={tour}/>

              })}
          </ul>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Tourlist;
