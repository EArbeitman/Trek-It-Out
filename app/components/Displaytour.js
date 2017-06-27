// Include React
var React = require("react");

var Displaytour = React.createClass({

 

  getInitialState: function(){

      return{

        handleChange: this.props.handleChange,
        test: this.props.data.name

      }
  },

  handleChange(){

      console.log('this is from this component: ' + this.state.test);
      console.log('this is from the previous component: ');
      console.log(this.state.handleChange);
  },

  // Here we render the component
  render: function() {
 
    return (

  <div>
                 <input type="button" onClick={this.handleChange} value={this.props.data.name} />
                <h2>Heading {this.props.data.name} </h2>
            
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
  
    );
  }
});

// Export the component back for use in other files
module.exports = Displaytour;
