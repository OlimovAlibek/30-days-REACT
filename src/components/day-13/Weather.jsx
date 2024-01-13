import React from 'react';
const Weather = (props) => {

  const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  marginTop: '20px',
  padding: '20px',
  width: '45%',
  };

  return(

       <div style={divstyle}>  
	       <h3>Current weather in {props.city}</h3>
	       <p>Temperature: {props.temperature}°C</p>
	       <p>Humidity: {props.humidity}%</p>
	       <p>Conditions: {props.description}</p>
       </div>
   )
}
export default Weather;