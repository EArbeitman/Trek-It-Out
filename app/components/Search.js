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
                <h1 className="animated slideInRight">Explore. Discover. Share.</h1>
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
                  <Link to={"tours"+"/" + this.state.category + "/" + this.state.city} ><button type="submit" className="btn btn-primary hvr-grow-shadow">Search <i className="fa fa-search" aria-hidden="true"></i></button></Link>
                </form>
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
                <Link to="/register" className="btn btn-primary btn-block">Get Started</Link>
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