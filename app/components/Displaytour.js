// Include React
var React = require("react");
var SaveTrekBtn = require("./SaveTrekBtn")

var Displaytour = React.createClass({

  getInitialState: function(){

      return{
        handleChange: this.props.handleChange
       
               
       
      }
  },

  DispSaveBtn: function(){
    // determine if button to save trek to profile should be displayed
    // if all search results are not being displayed (displayIndex is not -1)
    // need to add functionality to determine if user logged in and do query
    // if saved already
    if (!this.state.trekSaved) {
         console.log("displaying save button " + this.props.TrekSaved);
         console.log("trekSaved "+ this.props.saveTrek)
       // render Alltourbtn which is a button that will displays all results
      return  <SaveTrekBtn trekSaved = {this.props.trekSaved} 
                           saveTrek = {this.props.saveTrek}
               />
                
    }
    // if the button will not be rendered, null is returned
       return null
  },

 


  // handleChange is call from an onclick for the button that allows the
  // user to view details about a trek.  This function will call
  // props.handleChange will exists in Tours.js
  handleChange(){
      console.log("handle change within displaytour");
      {/*turn the index into a number*/}
      let ind = parseInt(this.props.item);
      {/*call the function in Tours.js*/}
       this.props.handleChange(ind)
     

  },



  // ******************* Here we render the component **************
  render: function() {
      var DispSaveBtn = this.DispSaveBtn
      
    return (

  <div>
    {/*Display name of tour as a button which allows user
    to display details about the stop*/}
    <div className = "row">
     {/*When the button is clicked, access handleChange function
        above which then calls handlechange in tours.js*/}
      <button className="btn"  
        onClick={this.handleChange}><h3>{this.props.data.tour_title}  </h3>
      </button>
    </div>

    {/*display a description of the trek*/}
    <div className = "row">     
      {this.props.data.tour_description} 
    </div>            
     {/*Display all of the stops in the array tours_stops
      for the trek using map function*/}         
      <ul>
         {this.props.data.tours_stops.map((places, index) => {
         return (
                  <li key={index}>
                      <span>{places.location_name}</span>
                   </li>
                );
            })
         }
      </ul>
     {/*This button allows the user to save a tour to the profile
     but will only be displayed if the tour hasn't been saved and 
     if user is signed in (functionality needs to be added*/}
    <DispSaveBtn/>
              
  </div>
  
    );
  }
});

// Export the component back for use in other files
module.exports = Displaytour;