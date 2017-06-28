// Include React
var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

var Login = React.createClass({

    //Init component
  getInitialState: function() {
    return { 
      email: "" ,
      password: ""

    };
  },

  handleChange(event) {
   
    console.log('current value is: ' + event.target.value);

    if(event.target.id === 'email'){
       this.setState({email: event.target.value});
    }

    if(event.target.id === 'password'){
       this.setState({password: event.target.value});
    }
  },

  handleLogin(event) {
    //console.log('the total data is :' + this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    helpers.loginUser({ 
      email: this.state.email,
      password: this.state.password 
    }).then(function(response){
        console.log("RESULTS", response.data.authenticated);
    })
    event.preventDefault();
  },

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Login Page</h3>
              </div>
              <div className="panel-body text-center">
                <form onSubmit = {this.handleLogin}>
                    <h4>
                      <strong>Email address</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      id="email"
                      required
                    />
                    <h4>
                      <strong>Password</strong>
                    </h4>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      id="password"
                      required
                    />
                  <div>
                  <input type="submit" value="Login" />
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
