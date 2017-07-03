// Include React
var React = require("react");
var Displaytour = require("./Displaytour");

var Tourlist = React.createClass({

  // Here we render the component
  render: function() {

    return (

        <div className="listContent">
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
                <h2><a href="blog-details.html">Sunny Side Heights Cathedral, Mexican and Jazz</a> <span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 5 k</span></h2>
                <p>Sunny Side Heights <span className="placeName">New York, NY</span></p>
                <p>This Trek will take you through three of my favorite spots in Sunny Side Heights (Upper West Side) Start with a visit to the North West part of Central Park. Followed by a Stop at The Cathedral Church of St. John the Divine. Mexican Lunch at Taqueria Y Fonda for some amazing Burritos. Finally finish of at Smoke and Jazz Supper Club.</p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">Parks,</a></li>
                  <li><a href="category-list-full.html">Restaurant,</a></li>
                  <li><a href="category-list-full.html">Cathedrals,</a></li>
                  <li><a href="category-list-full.html">Music Venue</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Tourlist;
