import React from 'react';
const TravelInfo = (props) => {
    const divstyle = {
      border: '2px solid white',
      display: 'inline-block',
      padding: '5px',
      width: '100%',  // Adjusted width to take the full width
      boxSizing: 'border-box',
    };
  
    return (
      <div className='travel-info-inner' style={divstyle}>
        <div>
          <h1>Traveling in {props.name}</h1>
          <h5>
            The capital of {props.name} is {props.capital}, within which there is much to explore.
            You'll need to stock up on the local currency which is {props.currency}, and learn a few words of the local language - {props.language}.
          </h5>
        </div>
        <div>
          <img src={props.flag} alt={`${props.name} Flag`} />
        </div>
      </div>
    );
  }
  

export default TravelInfo