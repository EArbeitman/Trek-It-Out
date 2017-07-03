// Include React
var React = require("react");
var Tourlist = require("./Tourlist");

var ResultsPage = React.createClass({

  // Here we render the component
  render: function() {

    return (
<section className="clerfix">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 col-xs-12">
        <div className="resultBar barSpaceAdjust">
          <h2>We found <span>8</span> Results for you</h2>
        </div>
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
                <h2><a href="blog-details.html" style={{color: '#222222'}}>Sunny Side Heights Cathedral, Mexican and Jazz</a> <span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 5 k</span></h2>
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
        <div className="listContent">
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="categoryImage">
                <img src="img/things/things-1.jpg" alt="Image category" className="img-responsive img-rounded"></img>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="categoryDetails">
                <h2><a href="blog-details.html" style={{color: '#222222'}}>Glory Hole Doughnuts</a> <span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</span></h2>
                <p>1569 Queen Street West <span className="placeName">Toronto</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua. </p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">Hotel,</a></li>
                  <li><a href="category-list-full.html">Restaurant</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="listContent borderRemove">
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="categoryImage">
                <img src="img/things/things-2.jpg" alt="Image category" className="img-responsive img-rounded"></img>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="categoryDetails">
                <h2><a href="blog-details.html" style={{color: '#222222'}}>Glory Hole Doughnuts</a> <span className="likeCount"><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</span></h2>
                <p>1569 Queen Street West <span className="placeName">Toronto</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua. </p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">Hotel,</a></li>
                  <li><a href="category-list-full.html">Restaurant</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="paginationCommon blogPagination categoryPagination">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                </a>
              </li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-sm-4 col-xs-12">
        <div className="clearfix map-sidebar map-right map-margin-btm">
          <div id="map" style={{position: 'relative', margin: '0',padding: '0',height: '538px'}}></div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
});

// Export the component back for use in other files
module.exports = ResultsPage;
