// Include React
var React = require("react");
var SaveTrekBtn = require("./SaveTrekBtn")

var Displaytour = React.createClass({

  componentDidMount: function() {
      console.log("*****************DISPLAYtour  " + this.props.data.tour_title)
      console.log("%%%%%%%%%%%%%%%%%%%%%" + this.props.data)
      // console.log(JSON.stringify(this.props.data))
  },


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
    <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="categoryImage">
                <img src="img/things/things-1.jpg" alt="Image category" className="img-responsive img-rounded" onClick={this.handleChange}></img>
                <span className="label label-primary">Verified</span>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12">
              <div className="categoryDetails">
                <ul className="list-inline rating">
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <h2 className="hvr-grow-shadow hvr-icon-drop btn btn-primary" onClick={this.handleChange}>&nbsp;&nbsp;{this.props.data.tour_title}
                 <span>   </span></h2>
                <p><span className="placeName">{this.props.data.city}</span></p>
                <p>{this.props.data.tour_description}</p>
                <ul className="list-inline list-tag">
                  <li><a href="category-list-full.html">{this.props.data.category}</a></li>
                </ul>
              </div>
             </div>
         </div>

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