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
      <div className="categoryDetails">
      <div>
            <button className="btn btn-primary hvr-grow"  
                  onClick={this.handleChange}> &nbsp; &nbsp;Return to Search Results&nbsp;&nbsp;
             </button>
      </div>
      </div>
           
    );
  }
});

// Export the component back for use in other files
module.exports = AllTourbtn;
