
// Include React
var React = require("react");
var StopDetail = require("./StopDetail");



var DispSelTour = React.createClass({
    componentDidMount: function() {
    // console.log("*****************DISPLAYEDTOUR  " + JSON.stringify(this.props.displayedTour))
    // console.log('-----' + this.props.displayedTour.tour_title + "  " + this.props.displayedTour.tour_stops)
    // console.log(" stops "+ this.props.displayedTour.tour_stops[0].stopName)
  },
   render: function() {

    return (
      
<div>
    	<div className="row">
            <div className="col-sm-12 col-xs-12">
              <h2 className="trek-details">Trek Details </h2>
            </div>
            </div>
            <div class="row">
            <div className="col-sm-12 col-xs-12">
              <div className="categoryDetails trek-details">
                <ul className="list-inline rating">
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <h2 onClick={this.handleChange}>{this.props.displayedTour.tour_title}<span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 5 k</span></h2>
                <p><span className="placeName">{this.props.displayedTour.tour_city}</span></p>
                <p>{this.props.displayedTour.tour_description}</p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">{this.props.displayedTour.category}</a></li>
                </ul>
                {/*Display all of the stops in the array tours_stops
      for the trek using map function*/}         
      {this.props.displayedTour.tour_stops.map((places, index) => {
        
           return (
              
                <StopDetail key={index} data={places}
            
                  />
                 );
        }, this)}
              </div>
            </div>
          </div>
          </div>
       

    );
  }
});

// Export the component back for use in other files
module.exports = DispSelTour;
