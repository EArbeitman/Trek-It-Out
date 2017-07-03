// Include React
var React = require("react");

var CreateTrek = React.createClass({

  // Here we render the component
  render: function() {

    return (

<section className="clearfix bg-dark listingSection">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <form action="" method="" className="listing__form">
          <div className="dashboardPageTitle text-center">
            <h2>Create new Trek</h2>
          </div>
          <div className="dashboardBoxBg mb30">
            <div className="profileIntro paraMargin">
              <h3>Submit Trek Details</h3>
              <p>User this form to help others get the true flavor of your city. Show off the hidden gems.</p>
              <div className="row">
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingTitle">Trek Title</label>
                  <input type="text" className="form-control" id="listingTitle" placeholder="Listing Title"></input>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingCategory">Category</label>
                  <div className="contactSelect">
                    <select name="guiest_id9" id="guiest_id9" className="select-drop">
                      <option value="0">All Category</option>
                      <option value="1">Restaurant</option>
                      <option value="2">Park</option>
                      <option value="3">Music Venues</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-xs-12">
                  <label for="discribeTheListing">Describe the listing</label>
                  <textarea className="form-control" rows="3" placeholder="Describe the listing"></textarea>
                </div>
                <button>Add a Trek Stop</button>
              </div>
            </div>
          </div>
          <div className="dashboardBoxBg mb30">
            <div className="profileIntro paraMargin">
              <h3>First Trek Stop</h3>
              <p>Search for the first stop on your Trek. This will be the marker which will show up for your overall Trek</p>
              <div className="row">
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingRegion">Trek City</label>
                  <div className="contactSelect">
                    <select name="guiest_id19" id="guiest_id19" className="select-drop">
                      <option value="0">All Region</option>
                      <option value="1">Boston</option>
                      <option value="2">San Francisco</option>
                      <option value="3">New York</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingAddress">Listing Address</label>
                  <input type="text" className="form-control" id="listingAddress" placeholder="Listing Address"></input>
                </div>

                <div className="form-group col-sm-6 col-sm-push-6 col-xs-12">
                  <div className="mapArea">
                    <div className="clearfix">
                      <div id="map-canvas"></div>
                    </div>
                    <span className="help-block">Enter the exact address or drag the map marker to position</span>
                  </div>
                </div>

                <div className="form-group col-sm-6 col-sm-pull-6 col-xs-12">
                  <label for="listingWebsite">Trek Stop image URL</label>
                  <input type="text" className="form-control" id="TrekStopURL" placeholder="http://"></input>
                </div>
                <div className="form-group col-sm-6 col-sm-pull-6 col-xs-12">
                  <label for="describeTheTrekStop">Describe why you chose this spot</label>
                  <textarea className="form-control" rows="3" placeholder="Tell us why you are passionate about this place"></textarea>
                </div>
              </div>
            </div>
          </div>


          <div className="form-footer text-center">
            <button type="submit" className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    );
  }
});

// Export the component back for use in other files
module.exports = CreateTrek;
