// Include React
var React = require("react");
var Tourlist = require("./Tourlist");
var Tourmap = require("./Tourmap");
var Tempcomp = require("./Tempcomp");
// function NavTour(data){
// console.log(data.check + "*****************function line 7")
//   //const individTour = this.state.displayIndex;
//   if (data.check) {
//     console.log('this is the Tours object: ');
//     console.log(Tours.state);
//     return <Tempcomp />
//   }
//     return <Tourlist name='treks' data={Tours.displayedTour}
//               action = {Tours.action}
//               handleChange = {Tours.handleChange}
//                />
// }

var Tours = React.createClass({
  getInitialState: function() {
    return {
      toursDisplayed: 'alltours',
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
  if (this.state.displayIndex === -1) {
    this.setState ({
          displayedTour: this.state.trekList
      }) 
  } 
    console.log("component mounted")
    console.log( "mount " + JSON.stringify(this.state.displayedTour))
     
    },
   handleChange: function(tourName, tourIndex) {
        console.log('handleChange line 45 tour.js')
     //console.log(JSON.stringify(tourname));
       
        this.setState({displayIndex: parseInt(tourIndex)});
  
        
    
     },


    // Whenever our component updates, the code inside componentDidUpdate is run
    componentDidUpdate: function(prevState) {

    console.log("COMPONENT UPDATED");
    if (this.state.prevDispInd != this.state.displayIndex){
      if (this.state.displayIndex >= 0){
          this.setState ({
                  displayedTour: this.state.trekList[this.state.displayIndex]
              })
         this.setState ({
                prevDispInd: this.state.displayIndex
            })
    } else
    {
          this.setState ({
                displayedTour: this.state.trekList[this.state.displayIndex]
            })
          this.setState ({
                prevDispInd: this.state.displayIndex
            })
    }
  }
console.log(this.state.displayIndex + "index componentdidupdate line 66")
    console.log(this.state.displayedTour)
    // We will check if the click count has changed...
    
  },

  NavTour: function(){

  const individTour = this.state.displayIndex;
  if (!individTour) {
    return <Tempcomp />
  }
    return <Tourlist name='treks' data={this.state.displayedTour}
              action = {this.state.action}
              handleChange = {this.handleChange}
               />
}, 
               
  // Here we render the component
  render: function() {

    console.log(this.state.displayedTour + " render")
    var NavTour = this.NavTour;

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
