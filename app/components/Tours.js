// Include React
var React = require("react");
var Tourlist = require("./Tourlist");
var Tourmap = require("./Tourmap");
var Tempcomp = require("./Tempcomp");
var AllTourbtn = require("./AllTourbtn");
var Link = require("react-router").Link;


var Tours = React.createClass({
  getInitialState: function() {
    return {
      displayIndex: -1,
      prevDispInd: -1,
      trekList: [
        {tour_title: 'trek1', tour_description: 'This is trek1', 
          tour_category: ['biking', 'bar hopping'], 
          tours_stops: [{location_name:'place1', longitude:5.734863, latitude:58.983991}, 
                        {location_name:'place2', longitude:4.888916, latitude:52.395715},
                        {location_name:'place3', longitude:-0.120850, latitude:51.508742},
                        {location_name:'place4', longitude:-0.120850, latitude:49.508742}
                        ]
        },
           
        {tour_title: 'trek2', tour_description: 'This is trek2', 
          tour_category: ['treking', 'amusement park'], 
          tours_stops: [{location_name:'place1', longitude:5.734863, latitude:57.983991}, 
                        {location_name:'place2', longitude:4.888916, latitude:51.395715},
                        {location_name:'place3', longitude:-0.120850, latitude:50.508742}
                        ]
        }
        ],
        displayedTour: [
        {tour_title: 'trek1', tour_description: 'This is trek1', 
          tour_category: ['biking', 'bar hopping'], 
          tours_stops: [{location_name:'place1', longitude:5.734863, latitude:58.983991}, 
                        {location_name:'place2', longitude:4.888916, latitude:52.395715},
                        {location_name:'place3', longitude:-0.120850, latitude:51.508742},
                        {location_name:'place4', longitude:-0.120850, latitude:49.508742}
                        ]
        },
           
        {tour_title: 'trek2', tour_description: 'This is trek2', 
          tour_category: ['treking', 'amusement park'], 
          tours_stops: [{location_name:'place1', longitude:5.734863, latitude:57.983991}, 
                        {location_name:'place2', longitude:4.888916, latitude:51.395715},
                        {location_name:'place3', longitude:-0.120850, latitude:50.508742}
                        ]
        }
        ]
   
      };
  },

componentDidMount: function() {
     // helpers.getClicks()
     //  .then(function(response) {
     //    // Using a ternary operator we can set newClicks to the number of clicks in our response object
     //    // If we don't have any clicks in our database, set newClicks to 0
     //    var newClicks = response.data.length ? response.data[0].clicks : 0;
     //    this.setState({
     //      clicks: newClicks
     //    });
     //    console.log("RESULTS", response);
     //    console.log("Saved clicks", newClicks);
     //  }.bind(this));

  if (this.state.displayIndex === -1) {
    this.setState ({
          displayedTour: this.state.trekList
      }) 
  } 
    console.log("component mounted")
    console.log( "mount " + JSON.stringify(this.state.displayedTour))
     
    },
   handleChange: function(tourIndex) {
        console.log('handleChange tour.js ' + tourIndex)
     //console.log(JSON.stringify(tourname));
       
        this.setState({displayIndex: parseInt(tourIndex)});
  
        
    
     },


    // Whenever our component updates, the code inside componentDidUpdate is run
    componentDidUpdate: function() {

    console.log("COMPONENTDID UPDATE prev:" + this.state.prevDispInd + "current " +  this.state.displayIndex);
    if (this.state.prevDispInd !== this.state.displayIndex){
      if (this.state.displayIndex >= 0){
          this.setState ({
                  displayedTour: this.state.trekList[this.state.displayIndex],
                  prevDispInd: this.state.displayIndex
              })
 
    } else
    {
          this.setState ({
                displayedTour: this.state.trekList[this.state.displayIndex],
                prevDispInd: this.state.displayIndex
            })
    }
  }

    // We will check if the click count has changed...
    
  },
// DispResultBtn show a button which allows user to toggle back
// to showing all the tour search results
DispResultBtn: function(){
// displayIndex tracks what is being displayed - 
// all search results (value is -1) or just a single tour 
// (value is index of tour in original results array)
    let allTours = this.state.displayIndex;
    console.log("in DisplayResetTour index = " + allTours)
   
   // if all search results are not being displayed (value is not -1)
    if (allTours >= 0) {
         console.log("search results tour button is being called");
       // render Alltourbtn which is a button that will displays all results
      return <AllTourbtn  handleChange = {this.handleChange}/> 
    }
    // if the button will not be rendered, null is returned
       return null
  },

  NavTour: function(){

    let allTours = this.state.displayIndex;
    console.log("in navtour index = " + allTours)
    console.log(this.state.displayedTour)
    if (allTours >= 0) {
      console.log("indiv tour is being called");
      return <Tempcomp />
    } 


    console.log("search result tour is being called");
      return <Tourlist name='treks' data={this.state.trekList}
                handleChange = {this.handleChange}
                 />
  }, 
               
  // Here we render the component
  render: function() {

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
            <DispResultBtn />   <Link to="/search"><button className="btn btn-default">New Search</button></Link>


            <NavTour />
           
          </div>
          <div className="col-lg-7">

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
