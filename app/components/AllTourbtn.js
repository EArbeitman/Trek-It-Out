// Include React
var React = require("react");


var AllTourbtn = React.createClass({
 handleChange(){
      console.log('handle change from alltourbtn');
      let i = -1;
      this.props.handleChange(i)
  },

  // Here we render the component
  render: function() {

    return (
      <div>
            <button className="btn btn-default"  
                  onClick={this.handleChange}>Return to Search Results
             </button>
      </div>
           
    );
  }
});

// Export the component back for use in other files
module.exports = AllTourbtn;
