// Include React
var React = require("react");
var Displaytour = require("./Displaytour");

var Tourlist = React.createClass({
  
  componentDidMount: function() {
      console.log("*****************Tourlist  ")
      console.log(JSON.stringify(this.props.data))
      console.log(this.props.data)

  },



  // Here we render the component
  render: function() {
    return (

      <div className="container-fluid" style = {{ backgroundColor: 'white',
                                            height: "auto",
                                            width: "100%"}}>

        <h2 className="tour-list">Treks Results </h2>
           <ul>{this.props.data.map(function(tour, i){

              return (
              
                <Displaytour key={i} data={tour}
                      handleChange = {this.props.handleChange}
                      saveTrek = {this.props.saveTrek}
                      trekSaved = {this.props.trekSaved}
                      item = {i}
                  />
                 );
                }, this)}
            </ul>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Tourlist;
