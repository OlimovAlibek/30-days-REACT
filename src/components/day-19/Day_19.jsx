import React, { Component } from 'react';
import InviteForm from './InviteForm';
import ConfirmScreen from './ConfirmScreen';


//BASE APP COMPONENT

class Day_19 extends Component {
  
state = {
  showConfirmScreen: false,
  toggleRsvps: false,
  toggleIcon: "⊕",
  rsvps: [],
  errorMessage: '',
  }


//Saves the users entry as a pending invite,validates
  onSubmit(name, dietaryRequirements) {
    console.log(name)
    if (name === undefined || dietaryRequirements === undefined) {
      console.log("error")
      this.setState({errorMessage: 'Please fill all fields'})
    } else {

    let pendingRsvp = []
    pendingRsvp.name = name;
    pendingRsvp.dietaryRequirements = dietaryRequirements;
    this.setState({ pendingRsvp: pendingRsvp, showConfirmScreen: true });
   }
  };


//Pushes the pending invte data into the RSVP's array on confirm
  onConfirm = () => {
    let rsvps = [...this.state.rsvps]
    let newRsvp = {}
    newRsvp.name = this.state.pendingRsvp.name;
    newRsvp.dietaryRequirements = this.state.pendingRsvp.dietaryRequirements;
    rsvps.push(newRsvp);
    this.setState ({ rsvps: rsvps, showConfirmScreen: false, errorMessage: '' })
  }


//Toggles the guestslist, and swutched the icon between + & -
  toggle = (event) => {
    this.state.toggleRsvps === true ? this.setState ({toggleRsvps: false, toggleIcon: "⊕"}) : this.setState ({toggleRsvps: true, toggleIcon: "⊖"}) ;
  }
 

//RENDER
  render() {
//Conditonal rendering to show correct screen
  let view;
  if (this.state.showConfirmScreen === false) {
      view = <InviteForm
      showConfirmScreen={(name, dietaryRequirements) => this.onSubmit(name, dietaryRequirements)}
      errorMessage={this.state.errorMessage}/>
  } else {
      view = <ConfirmScreen 
      name={this.state.pendingRsvp.name}
      dietaryRequirements={this.state.pendingRsvp.dietaryRequirements}
      onConfirm={this.onConfirm}
      onEdit={() => this.setState ({ showConfirmScreen: false, errorMessage: '' })}/>
  }

//Note: The following should really be its own component!!! Refractor
//Render and toggle the guest list conditionally
  let rsvps;
  if (this.state.toggleRsvps === true && this.state.rsvps.length <= 0) {
        rsvps = <div><p>No guests so far</p></div>
      } else if (this.state.toggleRsvps === true) {
        rsvps = <div> {this.state.rsvps.map((r) => { return <li>{r.name}, {r.dietaryRequirements}</li> })} </div>
    } else {
  //else nothing is rendered as section is not toggled
  }


//RETURN
  return (
  <div className="App">
    
    <div className="guests-section">
      <div>
        <p onClick={this.toggle}> Guest List {this.state.toggleIcon}</p>
        <p> {rsvps} </p>
      </div>
    </div>

    <div className="colour-section">
      {view}
    </div>

    </div>

  );
 }
}

export default Day_19;