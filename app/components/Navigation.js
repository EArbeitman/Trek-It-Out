
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
    
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" >
            Trek It Out!
          </a>
        </div>
        <div className ="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/search">Search</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Profile <b className="caret"></b></a>
                <ul className="dropdown-menu">
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
module.exports = Main;
