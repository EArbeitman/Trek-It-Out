
// Include React
var React = require("react");


var Tempcomp = React.createClass({
   render: function() {

    return (
<div>
    	<div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="categoryImage">
                <img src="img/things/things-1.jpg" alt="Image category" className="img-responsive img-rounded"></img>
                <span className="label label-primary">Verified</span>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="categoryDetails">
                <ul className="list-inline rating">
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <h2 onClick={this.handleChange}>{this.props.data.tour_title}<span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 5 k</span></h2>
                <p><span className="placeName">{this.props.data.city}</span></p>
                <p>{this.props.data.tour_description}</p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">{this.props.data.category}</a></li>
                </ul>
              </div>
            </div>
          </div>

     {/*Display all of the stops in the array tours_stops
      for the trek using map function*/}         
      {this.props.data.tours_stops.map((places, index) => {
         return (
      	<div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="categoryImage">
                <img src="img/things/things-1.jpg" alt="Image category" className="img-responsive img-rounded"></img>
                <span className="label label-primary">Verified</span>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="categoryDetails" key={index}>
                <h2 onClick={this.handleChange}>{places.location_name}</h2>
                <p><span className="placeName">{places.city}</span></p>
                <p>{places.tour_description}</p>
              </div>
            </div>
        </div>
                );
            })
         }
     {/*This button allows the user to save a tour to the profile
     but will only be displayed if the tour hasn't been saved and 
     if user is signed in (functionality needs to be added*/}
    <DispSaveBtn/>
              
  </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Tempcomp;
