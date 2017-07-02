// Include React
var React = require("react");


var SaveTrekBtn = React.createClass({

    getInitialState: function(){

      return{
         saveTrek: this.props.saveTrek
        
      }
  },



  saveTrek: function(){
    console.log("Save Trek");
    this.props.saveTrek()
  
  },


  // ***************************Here we render the component
  render: function() {

    return (
      <div>
            <button className="btn btn-default"  
                  onClick={this.saveTrek}>Save 
            </button>
      </div>
           
    );
  }
});

// Export the component back for use in other files
module.exports = SaveTrekBtn;
