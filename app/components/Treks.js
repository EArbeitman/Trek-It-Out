// Include React
var React = require("react");

var Treks = React.createClass({
 
  getInitialState: function(){
   return {
      tour_title: "",
      tour_description: "",
      tour_category: "",
      tour_stops: [],
      address: "",
      tour_city: "",
      url: "",
      stopDesc: ""
    
    }
  },


  stopComplete: function(){
      return (this.state.address !== "" &&
      this.state.tour_city  !== "")
  },

  handleClick: function(){
    console.dir("clicked")
    // if (this.stopComplete()){
    //   this.state.tour_stops.push({
    //         address: this.state.address,
    //         tour_city:  this.state.tour_city,
    //         url:  this.state.url,
    //         stopDesc:  this.state.stopDesc
    //   })
    //   console.log()
    //   this.setState ({
    //       tour_city: "",
    //       address: "",
    //       stopDesc: "",
    //       url: ""
    //   })
    // }
  },

  handleChange(event) {
   
    // if(event.target.id === 'city'){
    //    this.setState({tour_city: event.target.value});
    // }
    //  if(event.target.id === 'listingTitle'){
    //    this.setState({tour_title: event.target.value});
    // }
    //  if(event.target.id === 'address'){
    //    this.setState({address: event.target.value});
    // }
    //  if(event.target.id === 'describeList'){
    //    this.setState({description: event.target.value});
    // }
    // if(event.target.id === 'category'){
    //    this.setState({tour_category: event.target.value});
    // }
    // if(event.target.id === 'describeList'){
    //    this.setState({stopDesc: event.target.value});
    // }
    // if(event.target.id === 'TrekStopURL'){
    //    this.setState({url: event.target.value});
    // }

  },
  completeData: function(){
     return ( this.state.tour_title !== "" &&
          this.state.description !== "" &&
          this.state.tour_category.length >= 0 &&
          this.state.tour_city !== "" &&
          this.state.tour_stops.length >=0)
  },
  // When a user submits...
  submitTrek: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    console.log("submit tour")
    event.preventDefault();
    //  if (this.completeData()){
    //   console.log('submit')
    //   var catArr =[]
    //   catArr.push(this.state.tour_category)
    //   var trek = {
    //       tour_title: this.state.tour_title,
    //       tour_description: this.state.description,
    //       tour_category: catArr,
    //       tour_city: this.state.tour_city,
    //       tour_stops: this.state.tour_stops
    //       }

    //       console.log("trek to be added ")
    //       console.dir(trek)
    //   helpers.newTour(trek).then(function(err, newdoc) {
    //       console.log("Updated!" + newdoc);
    //       console.log("error adding " + err )
    //     });
    //   this.setState ({
    //       tour_title: "",
    //       tour_description: "",
    //       tour_category: [],
    //       tour_city: "",
    //       tour_stops: [],
    //       address: "",
    //       stopDesc: "",
    //       url: ""
    // })

    // // Set the parent to have the search term
    //  }
  },
  // Here we render the component
  render: function() {

    return (

<section className="clearfix bg-dark listingSection">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <form  className="listing__form">
          <div className="dashboardPageTitle text-center">
            <h2><strong>Create new Trek</strong></h2>
          </div>
          <div className="dashboardBoxBg mb30">
            <div className="profileIntro paraMargin">
              <h3>Submit Trek Details</h3>
              <p>Use this form to help others get the true flavor of your city. Show off the hidden gems.</p>
              <div className="row">
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingTitle">Trek Title</label>
                  <input type="text" className="form-control" id="listingTitle" placeholder="Listing Title"></input>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingCategory">Category</label>
                  <div className="contactSelect">
                    <select  className="select-drop">
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
                <button  type="button" onclick = {this.handleClick} >Add a Trek Stop</button>
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
                    <select className="select-drop">
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
            <button type="button" onclick={submitTrek} className="btn btn-lg">Submit</button>
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
module.exports = Treks;