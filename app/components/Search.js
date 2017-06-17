// Include React
var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <section id="intro">
      
        <div className="slogan">
          <h2>WELCOME TO <span className="text_color">Trek It Out</span> </h2>
          <h4> Choose a City and a Category and we will connect you with a local Tour</h4>
            <div className="form-group">
              <label for="City"><h4>Select City:</h4></label>
              <select className="form-control" id="City">
                <option>New York City, NY</option>
                <option>San Francisco, CA</option>
                <option>Boston, MA</option>
                <option>New Brunswick, NJ</option>
              </select>
              </div>
              <div>
              <label for="Categ"><h4>Type of Tour:</h4></label>
              <select className="form-control" id="Categ">
                <option>Bar Hop</option>
                <option>Dinner and a Movie</option>
                <option>Museums</option>
                <option>Music</option>
              </select>
            </div>
            </div>
        <div className="page-scroll">
          <a href="#service" className="btn btn-circle">
            <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
        </section>
    );
  }
});
module.exports = Search;
