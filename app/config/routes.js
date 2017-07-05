// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Login = require("../components/Login");
var Search = require("../components/Search");
var Treks = require("../components/Treks");
var SavedTreks = require("../components/SavedTreks");
var Profile = require("../components/Profile");
var Tours = require("../components/Tours");
var Register = require("../components/Register");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="login" component={Login} />
            <Route path="profile/:user" component={Profile} />

      <Route path="search" component={Search} />
            <Route path="tours/:category/:city" component ={Tours} />

      <Route path="tours" component = {Tours}/>
      <Route path="treks" component={Treks} />
      <Route path="savedtreks" component={SavedTreks} />
      <Route path="profile" component={Profile} />
       <Route path="register" component={Register} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>

);