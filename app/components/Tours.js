// Include React
var React = require("react");
// Tourlist is the component that renders listing of tours from search results
var Tourlist = require("./Tourlist");
// Tourmap is the component that renders google maps
var Tourmap = require("./Tourmap");
// placeholder for component to display individual tours
var Tempcomp = require("./Tempcomp");
// AllTourbtn is a button to toggle to displaying all search results
var AllTourbtn = require("./AllTourbtn");
// Link is required to route back to new search page
var Link = require("react-router").Link;

var helpers = require("../utils/helpers");

var Tours = React.createClass({

// set initialState of variables being monitored for change
  getInitialState: function() {
    return {

      displayIndex: -1,
      prevDispInd: -1,

      trekList: [],
      displayedTour: []
   
      };
  },
  // The following occurs once the component mounts
  componentDidMount: function() {
 
    var category = this.props.params.category;
    var city = this.props.params.city;

    helpers.viewTours(
    {
      category: category,
      city: city
    }
    ).then(function(response){
        var tours = response.data.length ? response.data[0].tour_title : 0;
        console.log("RESPONSE " + JSON.stringify(response));
        console.log("RESPONSE LENGTH " + response.data.length);
        console.log("RESULTS ", tours);
        //this.setState({trekList: response});
    })

  },


   // This function is used by children/grandchild of Tours
   // It handles the toggle of components between individual 
   // tours and all search results
  handleChange: function(tourIndex) {
    console.log('handleChange tour.js ' + tourIndex)

    this.setState({displayIndex: parseInt(tourIndex)});
  },


    // Whenever our component updates, the code inside componentDidUpdate is run
    // Our main component that effects change is displayIndex 
  componentDidUpdate: function() {
   
    // check to see of displayIndex is different from its previous value
    // This prevents needless rendering and a continous loop
    if (this.state.prevDispInd !== this.state.displayIndex){
      // Pages need to be rendered\
      // Check if search results should be displayed or an individual tour 
      if (this.state.displayIndex >= 0){
        // if index is not -1, set var for individ tour display
          this.setState ({
            // displayedTour will hold the tour selected by user
            displayedTour: this.state.trekList[this.state.displayIndex]
              })
 
      } 
      this.setState ({
         // update prevDispInd to current displayIndex  
            prevDispInd: this.state.displayIndex
        })
    }
  
    
  },

  // DispResultBtn show a button which allows user to toggle back
  // to showing all the tour search results
  DispResultBtn: function(){
  // displayIndex tracks what is being displayed - 
  // all search results (value is -1) or just a single tour 
  // (value is index of tour in original results array)
   
   // if all search results are not being displayed (displayIndex is not -1)
    if (this.state.displayIndex >= 0) {
         console.log("search results tour button is being called");
       // render Alltourbtn which is a button that will displays all results
      return <AllTourbtn  handleChange = {this.handleChange}/> 
    }
    // if the button will not be rendered, null is returned
       return null
  },

  // NavTour is called within render to conditionally render
  // either a display of individual tours or search results
  NavTour: function(){
    if (this.state.displayIndex >= 0) {
      console.log("indiv tour is being called");
      // render component for individual tour display
      return <Tempcomp />
    } 
      // if nothing was returned, render component to display search results
      // trekList is an array that holds search results
      // handlechange is a function that controls toggling of display between tours
      return <Tourlist name='treks' data={this.state.trekList}
                handleChange = {this.handleChange}
                 />
  }, 

               
  // Render the component
  render: function() {

    // map functions to components for conditional rendering of components
    var NavTour = this.NavTour;
    var DispResultBtn = this.DispResultBtn;

    return (
    <div>
        <div className="container searchAreaGray">
          <div className="row">
            <div className="col-xs-12">
              <div className=""> <h1>Results Treks</h1>
                <form className="form-inline">
                  <div className="form-group col-xs-6">
                    <div className="input-group">
                      <div className="input-group-addon">City</div>
                      <select onChange={this.handleChange} className="form-control" id="city">
                        <option>Select City</option>
                        <option>NYC</option>
                        <option>San-Francisco</option>
                        <option>Boston</option>
                        <option>Orlando</option>
                      </select>
                      <div className="input-group-addon addon-right"><i className="icon-listy icon-target" aria-hidden="true"></i></div>
                    </div>
                  </div>
                  <div className="form-group col-xs-6">
                    <div className="input-group">
                      <div className="input-group-addon">Category</div>
                      <select onChange={this.handleChange} className="form-control" id="category">
                        <option>Select Category</option>
                        <option>Bars</option>
                        <option>Cathedrals</option>
                        <option>Dinner&Movie</option>
                        <option>Museums</option>
                        <option>Music</option>
                        <option>Parks</option>
                      </select>
                      <div className="input-group-addon addon-right"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

    <div class="clerfix">
      <div className="container">

        {/*Begin Tour list and map display for Tours Display Page*/}
        <div className="row">
          <div className="col-lg-5">

          {/*Buttons: DispResultBtn maps to function above to 
                          allow user to display search results & only
                          renders when user is looking at individual tours
                      A button is also rendered to return to a new search */}
            <DispResultBtn />   <Link to="/search"><button className="btn btn-default">New Search</button></Link>

          {/*NavTour maps to function above to conditionally render
            either search results or individual tour components*/}
            <NavTour />
           
          </div>
          <div className="col-lg-7">
            {/*render the googles map here*/}
            <Tourmap 
              trekList = {this.state.displayedTour}
            />
          </div>
        </div>

      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Tours;
