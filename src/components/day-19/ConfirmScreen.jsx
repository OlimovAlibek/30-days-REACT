import React from 'react';

const ConfirmScreen = ( props ) => {

 return (

<div>

  <h2>Confirm RSVP Details</h2>
  <p>Name: {props.name}</p>
  <p>Dietary Requirements: {props.dietaryRequirements}</p>

  <button 
     className="secondarybtn"
     onClick={props.onEdit}>✕
  </button>
 
  <button 
     className="mainbtn"
     onClick={props.onConfirm}>Confirm
  </button>
 
  </div>

  );
};

export default ConfirmScreen;