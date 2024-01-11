import React from 'react'

function Weather(props) {
  return (
    <div>
      <h3>Current weather in {props.city}</h3>
	       <p>Temperature: {props.temperature}°C</p>
	       <p>Humidity: {props.humidity}%</p>
	       <p>Conditions: {props.description}</p>
    </div>
  )
}

export default Weather

