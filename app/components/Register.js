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
      username: "",
      password: ""

    };
  },

  handleChange(event) {
   
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

    if(event.target.id === 'username'){
       this.setState({username: event.target.value});
    }
  },

  handleSubmit(event) {
    //console.log('the total data is :' + this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    helpers.registerUser({ 
      firstname: this.state.firstname, 
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password 
    }).then(function(response){
        console.log("RESULTS", response);
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
                <h3 className="panel-title">Registration Page</h3>
              </div>
               <div className="panel-body text-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className="">
                      <strong>First Name</strong>
                    </h4>
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
                      <strong>Username</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className="form-control"
                      id="username"
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
