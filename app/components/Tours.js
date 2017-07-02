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
console.log("test");

var Tours = React.createClass({

// set initialState of variables being monitored for change
  getInitialState: function() {
    return {


      // displayIndex reflects what tours are being displayed on component
      // if its -1 - search results are being displayed
      // any other number represents the index of the tour in search results array
      displayIndex: -1,
      // prevDispInd holds the previous iteration of diplayIndex
      // it is used for comparison to determine if pages should be rendered.
      // without this comparison, a continuous loop would occur
      prevDispInd: -1,
      // trekList will hold the search results data

      // trekList: [
      //   {tour_title: 'trek1', tour_description: 'This is trek1', 
      //     tour_category: ['biking', 'bar hopping'], 
      //     tours_stops: [{location_name:'place1', longitude:5.734863, latitude:58.983991}, 
      //                   {location_name:'place2', longitude:4.888916, latitude:52.395715},
      //                   {location_name:'place3', longitude:-0.120850, latitude:51.508742},
      //                   {location_name:'place4', longitude:-0.120850, latitude:49.508742}
      //                   ]
      //   },
           
      //   {tour_title: 'trek2', tour_description: 'This is trek2', 
      //     tour_category: ['treking', 'amusement park'], 
      //     tours_stops: [{location_name:'place1', longitude:5.734863, latitude:57.983991}, 
      //                   {location_name:'place2', longitude:4.888916, latitude:51.395715},
      //                   {location_name:'place3', longitude:-0.120850, latitude:50.508742}
      //                   ]
      //   }
      //   ],


        // displayedTour will house the individ tour data to be displayed
        // when a tour is selected by the user

        // displayedTour: [
        // {tour_title: 'trek1', tour_description: 'This is trek1', 
        //   tour_category: ['biking', 'bar hopping'], 
        //   tours_stops: [{location_name:'place1', longitude:5.734863, latitude:58.983991}, 
        //                 {location_name:'place2', longitude:4.888916, latitude:52.395715},
        //                 {location_name:'place3', longitude:-0.120850, latitude:51.508742},
        //                 {location_name:'place4', longitude:-0.120850, latitude:49.508742}
        //                 ]
        // },
           
        // {tour_title: 'trek2', tour_description: 'This is trek2', 
        //   tour_category: ['treking', 'amusement park'], 
        //   tours_stops: [{location_name:'place1', longitude:5.734863, latitude:57.983991}, 
        //                 {location_name:'place2', longitude:4.888916, latitude:51.395715},
        //                 {location_name:'place3', longitude:-0.120850, latitude:50.508742}
        //                 ]
        // }
        // ]

      trekList: [],
      displayedTour: []
   
      };
  },
  // The following occurs once the component mounts
  componentDidMount: function() {
    console.log(this.props.params.category);
    console.log(this.props.params.city);

    helpers.viewTours(
    // {
    //   category: this.props.params.category,
    //   city: this.props.params.city
    // }
    ).then(function(response){
        var tours = response.data.length ? response.data[0].tour_title : 0;
        console.log("RESPONSE " + response);
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
    // displayIndex determines what tours are displayed
    this.setState({displayIndex: parseInt(tourIndex)});
  },


    // Whenever our component updates, the code inside componentDidUpdate is run
    // Our main component that effects change is displayIndex 
  componentDidUpdate: function() {
   
    console.log("COMPONENTDID UPDATE prev:" + this.state.prevDispInd + "current " +  this.state.displayIndex);
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
    // if individual tour is being displayed
    //console.log(this.state.displayedTour)
    if (this.state.displayIndex >= 0) {
      console.log("indiv tour is being called");
      // render component for individual tour display
      return <Tempcomp />
    } 
      // if nothing was returned, render component to display search results
    console.log("search result tour is being called");
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
    <section id="intro">
      <div className="container">

        <div className="row">

          <div className="col-lg-12">
              
            <h1>Results Tours</h1>

          </div>
              
        </div>
        {/*End Heading for Tours Display Page*/}

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
      </section>

    );
  }
});

// Export the component back for use in other files
module.exports = Tours;
