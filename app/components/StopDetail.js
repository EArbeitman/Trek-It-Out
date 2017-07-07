// Include React
var React = require("react");

var StopDetail = React.createClass({
  

  // Here we render the component
  render: function() {
      console.log("STOPDETAIL")
    return (

      <div className="container" style = {{ backgroundColor: 'white',
                                            height: "auto",
                                            width: "100%"}}>

  
          <ul>
              
             <div className="row">
                <div className="categoryDetails">
                <div className="col-sm-5 col-xs-12">
                  <div className="categoryImage">
                    <img  src={this.props.data.url} alt="Image category" className="img-responsive img-rounded"></img>
                    <span className="label label-primary">Verified</span>
                  </div>
                </div>
                <div className="col-sm-7 col-xs-12">
                  <h2>{this.props.data.stopName}</h2>
                  <p><span className="placeName" >Address: {this.props.data.address}, {this.props.data.stop_city}</span></p>
                  <p>{this.props.data.stopDesc}</p>
                </div>
            </div>
        </div>
            )

          </ul>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = StopDetail;
