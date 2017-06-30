// Include React
var React = require("react");

var Displaytour = React.createClass({

  getInitialState: function(){

      return{

        handleChange: this.props.handleChange
       

      }
  },

  handleChange(){
      console.log("handle change within displaytour");
      let ind = parseInt(this.props.item);
      this.props.handleChange(ind)
  },

  // Here we render the component
  render: function() {
 
    return (

  <div>
                 <input type="button" onClick={this.handleChange} value={this.props.data.tour_title} />
                <h2>Heading {this.props.data.tour_title}  </h2>
            
                {this.props.data.tour_description} 
                
               
                 <ul>
                     {this.props.data.tours_stops.map((places, index) => {
                     return (
                              <li key={index}>
                                  <span>{places.location_name}</span>
                               </li>
                            );
                        })
                     }
                   </ul>
   

              
  </div>
  
    );
  }
});

// Export the component back for use in other files
module.exports = Displaytour;