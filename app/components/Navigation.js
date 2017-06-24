
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Navigation = React.createClass({

  // Here we render the component
  render: function() {

    return (
    
    <nav bsClass="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div bsClass="container">
        <div bsClass="navbar-header page-scroll">
          <button type="button" bsClass="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
            <i bsClass="fa fa-bars"></i>
          </button>
          <a bsClass="navbar-brand" >
            Trek It Out!
          </a>
        </div>
        <div bsClass ="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul bsClass="nav navbar-nav">
            <li bsClass="active"><Link to="/search">Search</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li bsClass="dropdown">
              <a href="#" bsClass="dropdown-toggle" data-toggle="dropdown">Profile <b bsClass="caret"></b></a>
                <ul bsClass="dropdown-menu">
                  <li><Link to="/treks">My Treks</Link></li>
                  <li><Link to="/savedtreks">Saved Treks</Link></li>
                  <li><Link to="/profile">My Profile</Link></li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> 

   
    );
  }
});

// Export the component back for use in other files
module.exports = Navigation;
