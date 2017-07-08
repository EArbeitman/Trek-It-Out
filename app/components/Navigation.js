
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Navigation = React.createClass({

  // Here we render the component
  render: function() {

    return (
     
      <header className="header">

      {/*<!-- TOP INFO BAR -->*/}

      <div className="nav-wrapper navbarWhite">

        {/*<!-- NAVBAR -->*/}
        <nav id="menuBar" className="navbar navbar-default lightHeader" role="navigation">
          <div className="container">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand hvr-grow-shadow" href="index.html"><img src="img/logo-blue.png" alt="logo"></img></a>
            </div>
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className=""><Link to="Search">New Search</Link></li>
                <li className=" dropdown singleDrop">
                  <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">admin <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                  <ul className="dropdown-menu dropdown-menu-right">
                      <li><Link to="Profile">My Profile</Link></li>
                      <li><Link to="Treks">Create a Trek</Link></li>
                      <li><Link to="ResultsPage">Temp link to results</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-default navbar-btn"><Link to="Login"> + <span>Login</span> </Link></button>
          </div>
        </nav>
      </div>
  </header>
   

   
    );
  }
});

// Export the component back for use in other files
module.exports = Navigation;
