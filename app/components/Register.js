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

  handleChange(event) {
   
    console.log('current value is: ' + event.target.value);

    if(event.target.id === 'firstname'){
       this.setState({firstname: event.target.value});
    }

    if(event.target.id === 'lastname'){
       this.setState({lastname: event.target.value});
    }

    if(event.target.id === 'email'){
       this.setState({email: event.target.value});
    }

    if(event.target.id === 'password'){
       this.setState({password: event.target.value});
    }
  },

  handleSubmit(event) {
    //console.log('the total data is :' + this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    event.preventDefault();
  },

  testConsole(){
    console.log('hello world');
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
                <form onSubmit={this.handleSubmit}>
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                  </div>
                  <div>
                  <input type="submit" value="Create Profile" />
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
module.exports = Register;
