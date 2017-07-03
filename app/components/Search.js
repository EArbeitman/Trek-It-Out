// Include React
var React = require("react");
var Link = require("react-router").Link;
var Tours = require("./Tours");

var Search = React.createClass({

    getInitialState: function() {
    return { 
      city: "", 
      category: ""

    };
  },

    handleChange(event) {
   
    if(event.target.id === 'city'){
       this.setState({city: event.target.value});
    }

    if(event.target.id === 'category'){
       this.setState({category: event.target.value});
    }

  },

  // Here we render the component
  render: function() {

    var category = "hello"
    var city = "nyc"

    return (
    <div>
      <section className="clearfix homeBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="banerInfo">
                <h1>Explore. Discover. Share</h1>
                <p>Trek it Out helps to find local tours designed by locals</p>
                <form className="form-inline" action="listing-sidebar-map-left.html" method="">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">City</div>
                      <select onChange={this.handleChange} className="form-control" id="city">
                        <option>Select City</option>
                        <option>NYC</option>
                        <option>San-Francisco</option>
                        <option>Boston</option>
                        <option>Orlando</option>
                      </select>
                      <div className="input-group-addon addon-right"><i className="icon-listy icon-target" aria-hidden="true"></i></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">Category</div>
                      <select onChange={this.handleChange} className="form-control" id="category">
                        <option>Select Category</option>
                        <option>Bars</option>
                        <option>Cathedrals</option>
                        <option>Dinner&Movie</option>
                        <option>Museums</option>
                        <option>Music</option>
                        <option>Parks</option>
                      </select>
                      <div className="input-group-addon addon-right"></div>
                    </div>
                  </div>
                  <Link to={"tours"+"/" + this.state.category + "/" + this.state.city} ><button type="submit" className="btn btn-primary">Search <i className="fa fa-search" aria-hidden="true"></i></button></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clearfix interestArea">
        <div className="container">
          <div className="page-header text-center">
            <h2>What are You Interested in? <small>Explore and connect with great local businesses</small></h2>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <a href="#" className="interestContent">
                <span>
                  <i className="icon-listy icon-tea-cup-1"></i>
                  Restaurant
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-list-full.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-building"></i>
                  Hotels
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-grid.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-martini"></i>
                  Nightclubs
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-list-left.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-car-1"></i>
                  City sights
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-grid-right.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-castle"></i>
                  Museums
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-list-right.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-television"></i>
                  Movie Theaters
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="category-grid-full.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-mall-1"></i>
                  Shopping
                </span>
              </a>
            </div>
            <div className="col-sm-3 col-xs-12">
              <a href="all-business.html" className="interestContent">
                <span>
                  <i className="icon-listy icon-more"></i>
                  View All
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="clearfix thingsArea">
        <div className="container">
          <div className="page-header text-center">
            <h2>Popular Things Near You <small>This are some of most popular listing</small></h2>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div id="thubmnailSlider" className="carousel slide thumbnailCarousel">

                <ol className="carousel-indicators">
                  <li data-target="#thubmnailSlider" data-slide-to="0" className="active"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="1"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="2"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="3"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="4"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="5"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="6"></li>
                  <li data-target="#thubmnailSlider" data-slide-to="7"></li>
                </ol>

                {/*<!-- Carousel items -->*/}
                <div className="carousel-inner">

                  <div className="item row active">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-1.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater <i className="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-list-left.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-2.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater</h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-grid-full.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-3.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater <i className="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-grid.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-1.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater</h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-grid-full.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-2.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater <i className="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-list-right.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-3.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater</h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-grid-full.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-1.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater <i className="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-grid.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="thingsBox">
                        <div className="thingsImage">
                          <img src="img/things/things-2.jpg" alt="Image things"></img>
                          <div className="thingsMask">
                            <ul className="list-inline rating">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <a href="blog-details.html"><h2>The City Theater</h2></a>
                            <p>10 Bay Street Toronto Ontario Canada</p>
                          </div>
                        </div>
                        <div className="thingsCaption ">
                          <ul className="list-inline captionItem">
                            <li><i className="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                            <li><a href="category-list-full.html">Hotel, Restaurant</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <a className="left carousel-control" href="#thubmnailSlider" data-slide="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                <a className="right carousel-control" href="#thubmnailSlider" data-slide="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clearfix countUpSection">
        <div className="container">
          <div className="page-header text-center">
            <h2>Why Trek it Out?</h2>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="text-center countItem">
                <div className="counter">140</div>
                <div className="counterInfo bg-color-1">Treks</div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="text-center countItem">
                <div className="counter">120</div>
                <div className="counterInfo bg-color-2">Tour Guides</div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="text-center countItem">
                <div className="counter">180</div>
                <div className="counterInfo bg-color-3">Cities</div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="text-center countItem">
                <div className="counter">220</div>
                <div className="counterInfo bg-color-4">Reviews</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="btnArea text-center">
                <a href="#" className="btn btn-primary">Search for Treks</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clearfix callAction">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-9 col-xs-12">
              <div className="callInfo">
                <h4><span>Trek it Out</span> is the <span>best way</span> <br/>to find great local hot spots.  Sign up now!</h4>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-12">
              <div className="btnArea">
                <a href="sign-up.html" className="btn btn-primary btn-block">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{backgroundImage: 'url(img/background/bg-footer.jpg)'}}>
          <div className="clearfix copyRight">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="copyRightWrapper">
                    <div className="row">
                      <div className="col-sm-5 col-sm-push-7 col-xs-12">
                        <ul className="list-inline socialLink">
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="col-sm-7 col-sm-pull-5 col-xs-12">
                        <div className="copyRightText">
                          <p>Copyright &copy; 2017. All Rights Reserved by <a href="#">Trek it Out</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>
    </div>

    );
  }
});
module.exports = Search;
