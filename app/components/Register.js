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

<div>
<section className="clearfix pageTitleSection">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="pageTitle">
          <h2>Sign Up Page</h2>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="clearfix signUpSection">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 col-xs-12">
        <div className="signUpFormArea">
          <div className="priceTableTitle">
            <h2>Account Registration</h2>
          </div>
          <div className="signUpForm">
            <form onSubmit={this.handleSubmit}>
              <div className="formSection">
                <h3>Contact Information</h3>
                <div className="row">
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="firstName" className="control-label">First Name*</label>
                    <input
                      type="text"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      className="form-control"
                      id="firstname"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="lastName" className="control-label">Last Name*</label>
                    <input
                      type="text"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      className="form-control"
                      id="lastname"
                      required
                    />
                  </div>
                  <div className="form-group col-xs-12">
                    <label for="emailAdress" className="control-label">Email Address*</label>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="formSection">
                <h3>Account Information</h3>
                <div className="row">
                  <div className="form-group col-xs-12">
                    <label for="usernames" className="control-label">Username*</label>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className="form-control"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="passwordFirst" className="control-label">Password*</label>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>
              </div>
                <div className="row">
                  <div className="form-group col-xs-12 mb0">
                    <button type="submit" className="btn btn-primary">Create Account</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Register;
