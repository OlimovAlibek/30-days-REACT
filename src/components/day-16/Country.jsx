import React from 'react';
const Country = (props) => {
    const divstyle = {
      border: '2px solid white',
      display: 'inline-block',
      padding: '5px',
      width: '100%',  // Adjusted width to take the full width
      backgroundColor: props.color,
      boxSizing: 'border-box',
    };
  
    return (
      <div onClick={props.click} style={divstyle}>
        <h4>{props.name}</h4>
        <h5>Explore Destination</h5>
      </div>
    );
  }

export default Country