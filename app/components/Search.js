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
      <section id="intro">
      
        <div className="slogan">
          <h2>WELCOME TO <span className="text_color">Trek It Out</span> </h2>
          <h4> Choose a City and a Category and we will connect you with a local Tour</h4>
            <div className="form-group">
              <label htmlFor="city"><h4>Select City:</h4></label>
             
              <select onChange={this.handleChange} className="form-control" id="city">
                <option>New York City, NY</option>
                <option>San Francisco, CA</option>
                <option>Boston, MA</option>
                <option>New Brunswick, NJ</option>
              </select>
              </div>
              <div>
              <label htmlFor="category"><h4>Type of Tour:</h4></label>
              <select onChange={this.handleChange} className="form-control" id="category">
                <option>Bar Hop</option>
                <option>Dinner and a Movie</option>
                <option>Museums</option>
                <option>Music</option>
              </select>
            </div>
            </div>

        <div className="page-scroll">
          <Link to={"tours/"+ this.state.category + "/" + this.state.city} ><button className="btn btn-circle">Create Idea</button></Link>
            <i className="fa fa-angle-double-down animated"></i>
          
        </div>
        </section>
    );
  }
});
module.exports = Search;
