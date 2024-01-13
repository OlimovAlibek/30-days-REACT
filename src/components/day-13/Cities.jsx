import React from 'react';
const City = (props) => {

  
  const outputstyle = {
  color: 'black',
  fontSize: '80%',

  };

  const divStyle = {
  	border: '4px black solid',
  	margin: '10px',
  	width: '25vw',
  	display: 'inline-block',
  }
 
  return (
      
      <div >
      <h1 >
        {props.name}
      </h1>
      <p>
        {props.temp}°C
      </p>
      </div>
  )
}

export default City;