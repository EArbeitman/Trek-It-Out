// Include React
var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

var Register = React.createClass({

  //Init component
  getInitialState: function() {
    return { 
      firstname: "", 
      lastname: "", 
      email: "" ,
      password: ""
    };
  },

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Registration Page</h3>
              </div>
               <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h4 className="">
                      <strong>First Name</strong>
                    </h4>
                    {/*
                      Note how each of the form elements has an id that matches the state.
                      This is not necessary but it is convenient.
                      Also note how each has an onChange event associated with our handleChange event.
                    */}
                    <input
                      type="text"
                      value={this.state.firstname}
                      className="form-control"
                      id="firstname"
                      required
                    />

                    <h4>
                      <strong>Last Name</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.lastname}
                      className="form-control"
                      id="lastname"
                      required
                    />

                    <h4>
                      <strong>Email address</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.email}
                      className="form-control"
                      id="text"
                      required
                    />
                    <h4>
                      <strong>Password</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.password}
                      className="form-control"
                      id="text"
                      required
                    />
                  </div>
                </form>
            </div>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Register;
