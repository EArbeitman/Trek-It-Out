// Include React
var React = require("react");
// Tourlist is the component that renders listing of tours from search results
var Tourlist = require("./Tourlist");
// Tourmap is the component that renders google maps
var Tourmap = require("./Tourmap");
// placeholder for component to display individual tours
var DispSelTour = require("./DispSelTour");
// AllTourbtn is a button to toggle to displaying all search results
var AllTourbtn = require("./AllTourbtn");
// Link is required to route back to new search page
var Link = require("react-router").Link;

var helpers = require("../utils/helpers");

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
      trekList: [],
      displayedTour: [],
      trekSaved: false,
        
        centerLat: 52.395715,
        centerLng: 4.888916,
        zoom: 5,
        pathArray: [
              [ 
                new google.maps.LatLng(58.983991,5.734863),
                new google.maps.LatLng(52.395715,4.888916),
                new google.maps.LatLng(51.508742,-0.120850),
                new google.maps.LatLng(49.508742,-0.120850)
              ],
              [ 
                new google.maps.LatLng(57.983991,2.734863),
                new google.maps.LatLng(51.395715,1.888916),
                new google.maps.LatLng(50.508742,-0.120850),
                new google.maps.LatLng(44.508742,-0.120850)
              ],

              [ new google.maps.LatLng(57.983991,2.534863),
                new google.maps.LatLng(51.395715,5.534863),
                new google.maps.LatLng(50.508742,5.5348630),
                new google.maps.LatLng(44.508742,5.534863)
              ]
          ],
          tourPath: [
              [ 
                new google.maps.LatLng(58.983991,5.734863),
                new google.maps.LatLng(52.395715,4.888916),
                new google.maps.LatLng(51.508742,-0.120850),
                new google.maps.LatLng(49.508742,-0.120850)
              ],
              [ 
                new google.maps.LatLng(57.983991,2.734863),
                new google.maps.LatLng(51.395715,1.888916),
                new google.maps.LatLng(50.508742,-0.120850),
                new google.maps.LatLng(44.508742,-0.120850)
              ],
              [ new google.maps.LatLng(57.983991,2.534863),
                new google.maps.LatLng(51.395715,5.534863),
                new google.maps.LatLng(50.508742,5.5348630),
                new google.maps.LatLng(44.508742,5.534863)
              ]
          ]
   
      };
  },
  // The following occurs once the component mounts
  componentDidMount: function() {
    console.log(this.props.params.category);
    console.log(this.props.params.city);

    helpers.viewTours(
    {
      category: this.props.params.category,
      city: this.props.params.city
    }
        ).then(function(response){
            var tours = response.data.length ? response.data[0].tour_title : 0;
            console.log("RESPONSE " + JSON.stringify(response.data));
            console.log("RESPONSE LENGTH " + response.data.length);
          
            this.setState({
              trekList: response.data,
              displayIndex: -1
            })

        }.bind(this));
  },

   // This function is used by children/grandchild of Tours
   // It handles the toggle of components between individual 
   // tours and all search results
  handleChange: function(tourIndex) {
    console.log('handleChange tour.js ' + tourIndex)
    // displayIndex determines what tours are displayed
    this.setState({displayIndex: parseInt(tourIndex)});
  },

  saveTrek: function() {
    console.log('trekSaved displaytour.js ')
    
    this.setState({trekSaved: true});

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
            // displayedTour: this.state.trekList[this.state.displayIndex],
            tourPath: [this.state.pathArray[this.state.displayIndex]],
            prevDispInd: this.state.displayIndex,
           
              });

      } else
      {
        console.log("*****************TREKLIST  " + JSON.stringify(this.state.trekList))
          this.setState ({
            // displayedTour will hold the tour selected by user
            // displayedTour: this.state.trekList,
            tourPath: this.state.pathArray,
            prevDispInd: this.state.displayIndex,
            
              });
      }
      
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
       // render Alltourbtn which is a button that will displays all results when clicked
      return <AllTourbtn  handleChange = {this.handleChange}/> 
    }
    // if the button will not be rendered, null is returned
       return null
  },

  // NavTour is called within render to conditionally render
  // either a display of individual tours or search results
  NavTour: function(){
    if (this.state.displayIndex >= 0) {
      // render component for individual tour display
      return <DispSelTour displayedTour = { this.state.trekList[this.state.displayIndex]}
                handleChange = {this.handleChange}
                saveTrek = {this.saveTrek}
                trekSaved = {this.state.trekSaved}/>
    } 
      // if nothing was returned, render component to display search results
      // trekList is an array that holds search results
      // handlechange is a function that controls toggling of display between tours
      return <Tourlist name='treks' data={this.state.trekList}
                handleChange = {this.handleChange}
                saveTrek = {this.saveTrek}
                trekSaved = {this.state.trekSaved}
                 />
                          
  }, 

               
  // Render the component
  render: function() {
    // map functions to components for conditional rendering of components
    var NavTour = this.NavTour;
    var DispResultBtn = this.DispResultBtn;
    
  return (
 
     <section className="clearfix homeBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
          {/*Buttons: DispResultBtn maps to function above to allow user to display search results & only
              renders when user is looking at individual tours.  A button is also rendered to return to a new search */}
             <DispResultBtn />
          </div>

        </div>
        {/*End Heading for Tours Display Page*/}

        {/*Begin Tour list and map display for Tours Display Page*/}
       <div className="row">
          <div className="col-lg-12">

          

          {/*NavTour maps to function above to conditionally render
            either search results or individual tour components*/}
          <NavTour />
           
          </div>
         <div className="col-lg-7">
            {/*render the googles map here*/}
{/*            <Tourmap 
              trekList = {this.state.displayedTour}
              centerLat = {this.state.centerLat}
              centerLng = {this.state.centerLng}
              zoom = {this.state.zoom}
              tourPath = {this.state.tourPath}
              pathArray = {this.state.pathArray}
            />
 */}         </div>
        </div>
      </div>
      </section>


    );
  }
});

// Export the component back for use in other files
module.exports = Tours;
