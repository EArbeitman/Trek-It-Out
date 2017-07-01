// Include React
var React = require("react");

var Profile = React.createClass({

  // Here we render the component
  render: function() {

    return (

        <div className="container">
            <h1>Edit Profile</h1>

          <div className="row">
              {/*<!-- left column -->*/}
              <div className="col-md-3">
                <div className="text-center">
                  <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"></img>
                  <h6>Upload a different photo...</h6>
                  <input type="file" className="form-control"></input>
                </div>
              </div>
              
              {/*<!-- edit form column -->*/}
              <div className="col-md-9 personal-info">
                <div className="alert alert-info alert-dismissable">
                  <a className="panel-close close" data-dismiss="alert">×</a> 
                  <i className="fa fa-coffee"></i>
                  This is an <strong>.alert</strong>. Use this to show important messages to the user.
                </div>
                <h3>Personal info</h3>
                
                <form className="form-horizontal" role="form">
                  <div className="form-group">
                    <label className="col-lg-3 control-label">First name:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Jane"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Last name:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Bishop"></input>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-lg-3 control-label">Email:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="janesemail@gmail.com"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Bio:</label>
                    <div className="col-lg-8">
                      <textarea className="form-control" rows="10" type="text" value=""></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label"></label>
                    <div className="col-md-8">
                      <input type="button" className="btn btn-primary" value="Save Changes"></input>
                      <span></span>
                      <input type="reset" className="btn btn-default" value="Cancel"></input>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Profile;
