// Include React
var React = require("react");


var Displaytour = React.createClass({

  // Here we render the component
  render: function() {
 
    return (

  <div className="panel panel-default">
              <div className="panel-heading btn text-center">
                <h2 className="panel-title">{this.props.data.name}</h2>
              </div>
              <div className="panel-body">
                {this.props.data.description}
                
               
                 <ul>
                     {this.props.data.places.map((places, index) => {
                     return (
                              <li key={index}>
                                  <span>{places}</span>
                               </li>
                            );
                        })
                     }
                   </ul>
   

              </div>
  </div>
  
    );
  }
});

// Export the component back for use in other files
module.exports = Displaytour;
