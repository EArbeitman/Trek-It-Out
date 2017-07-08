// Include React
var React = require("react");
var helpers = require("../utils/helpers");
var LoginRequired = require("./LoginRequired");

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
      stopDesc: "",
      stopName: ""    
    }
  },


 stopComplete: function(){
      if (this.state.address !== "" &&
      this.state.tour_city  !== "" &&
      this.state.stopName  !== ""){
  
          return true
        }
  },

  handleClick: function(){
     event.preventDefault();
 
     var completeStopData = this.stopComplete()

  if (completeStopData && this.isLoggedIn()){
        // var self = this;
        helpers.getGeo( 
          { 
            term:      this.state.stopName,
            location:  this.state.tour_city
          }).then(function(response){
            this.state.tour_stops.push({
            stopName: response.data.name,
            lng: response.data.coordinates.longitude,
            lat: response.data.coordinates.latitude,
            address: response.data.location.address1,
            stop_city:  response.data.location.city,
            url:  response.data.image_url,
            stopDesc:  this.state.stopDesc
      })

      if (this.state.tour_stops.length === 1) {
         this.setState ({
              tour_city:this.state.tour_city
        })
      }
      console.log("this stop is ");
      console.log(this.state.tour_stops[this.state.tour_stops.length-1])
        this.setState ({
            stopName:"",
            address: "",
            stopDesc: "",
            url: "",
            stopDesc: ""

      })


      }.bind(this));//promise ends here
    }
  
 
    // this.setState({submitStop: true})
    //
  },

  handleChange(event) {
   
    if(event.target.id === 'city'){
       this.setState({tour_city: event.target.value});
    }
     if(event.target.id === 'listingTitle'){
       this.setState({tour_title: event.target.value});
    }
     if(event.target.id === 'address'){
       this.setState({address: event.target.value});
    }
     if(event.target.id === 'describeList'){
       this.setState({tour_description: event.target.value});
    }
    if(event.target.id === 'category'){
       this.setState({tour_category: event.target.value});
    }
    if(event.target.id === 'describeStop'){
       this.setState({stopDesc: event.target.value});
    }
    if(event.target.id === 'stopURL'){      console.log ("Url changed " + event.target.value)
       this.setState({url: event.target.value});
    }
    if(event.target.id === 'stopName'){
       this.setState({stopName: event.target.value});
    }

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

    event.preventDefault();
    if(this.isLoggedIn() && this.completeData()){
      console.log("submit tour")
      var catArr =[]
      catArr.push(this.state.tour_category)

      helpers.newTour(
        {
          tour_title: this.state.tour_title,
          tour_description: this.state.tour_description,
          tour_category: catArr,
          tour_city: this.state.tour_city,
          tour_stops: this.state.tour_stops,
          username: document.cookie.split('=')[1]
        }
        ).then(function(err, newdoc) {
          console.log("Updated!" + newdoc);
          console.log("error adding " + err )
        });
      this.setState ({
          tour_title: "",
          tour_description: "",
          tour_category: [],
          tour_city: "",
          tour_stops: [],
          address: "",
          stopDesc: "",
          url: "",
          stopName: ""
    })

    // Set the parent to have the search term
     }
  },

isLoggedIn: function(){
  var username = document.cookie.split('=')[1];

  if (username === undefined || username === ""){
    return false
  }
  return true
},

  componentDidMount: function() {
 
    helpers.getGeo(
    // {
    //   category: category,
    //   city: city
    // }
    ).then(function(response){
        var temp = response.data.length ? response.data[0].tour_title : 0;
        console.log("RESPONSE " + JSON.stringify(response));
        console.log("RESPONSE LENGTH " + response.data.length);
        console.log("RESULTS ", temp);
        //this.setState({trekList: response});
    })

  },
  checkloggin: function(){
    
    if (!this.isLoggedIn()){

      return <LoginRequired />
    } 
    
    return null
  },


  // Here we render the component
  render: function() {
     var Checkloggin = this.checkloggin;
    return (

<section className="clearfix bg-dark listingSection">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <form  className="listing__form">
          <div className="dashboardPageTitle text-center">
                <Checkloggin/>
            <h2><strong>Create new Trek</strong></h2>

          </div>
          <div className="dashboardBoxBg mb30">
            <div className="profileIntro paraMargin">
              <h3>Submit Trek Details</h3>
              <p>Use this form to help others get the true flavor of your city. Show off the hidden gems.</p>
              <div className="row">
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="listingTitle">Trek Title</label>
                  <input value={this.state.tour_title}
                      onChange={this.handleChange}
                      type="text" className="form-control" id="listingTitle" placeholder="Listing Title"></input>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="category">Category</label>
                  <div className="contactSelect">
                    <select onChange={this.handleChange}  className="select-drop" id = "category">
                      <option >Select a Category</option>
                      <option value="All">All Category</option>
                      <option value="Bars">Bars</option>
                      <option value="Restaurants">Restaurants</option> 
                      <option value="Cathedrals">Cathedrals</option>
                      <option value="Dinner&Movie">Dinner&Movie</option>
                      <option value="Museums">Museums</option>
                      <option value="Music">Music</option>
                      <option value="Parks">Parks</option> 
                    </select>
                  </div>
                </div>
                <div className="form-group col-xs-12">
                  <label for="describeList">Describe the listing</label>
                  <textarea id = "describeList" value={this.state.tour_description}  onChange={this.handleChange} className="form-control" rows="3" placeholder="Describe the listing"></textarea>

                </div>
              </div>
            </div>
          </div>
          <div className="dashboardBoxBg mb30">
            <div className="profileIntro paraMargin">
              <h3>Trek Stops</h3>
              <p>Search for the first stop on your Trek. This will be the marker which will show up for your overall Trek</p>
              <div className="row">
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="city">Trek City</label>
                  <div className="contactSelect">
                    <select onChange={this.handleChange} className="select-drop" id = "city">
                      <option>Select City</option>
                      <option value="NYC">NYC</option>
                      <option value="San-Francisco">San-Francisco</option>
                      <option value="Boston">Boston</option>
                      <option value="Orlando">Orlando</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="address">Listing Address</label>
                  <input type="text" className="form-control" id="address"
                    value = {this.state.address} onChange={this.handleChange}  placeholder="Listing Address"></input>
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
                  <label for="stopName">Trek Stop Name: </label>
                  <input type="text"  value = {this.state.stopName} onChange={this.handleChange} className="form-control" id="stopName" placeholder="Name of attraction"></input>
                </div>
                <div className="form-group col-sm-6 col-sm-pull-6 col-xs-12">
                  <label for="describeStop">Describe why you chose this spot</label>
                  <textarea className="form-control" rows="3" value = {this.state.stopdes} onChange={this.handleChange} 
                            id ="describeStop" placeholder="Tell us why you are passionate about this place"></textarea>
                </div>
              </div>
                <button type="button" className="btn btn-secondary hvr-grow" onClick = {this.handleClick}>   Add stop to your trek</button>

            </div>
          </div>


          <div className="form-footer text-center">
            <button type="button" onClick={this.submitTrek} className="btn btn-submit hvr-grow">Submit Tour</button>
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