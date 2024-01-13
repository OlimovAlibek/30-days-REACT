import React from 'react';
const Form = (props) => {

  
  const inputstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '18px',
  margin: '5px',
  };
 
  return (
      <form onSubmit={props.loadWeather}>
        <select type="select" name="city" style={inputstyle}>
         <option value="dunedin">Dunedin</option>
         <option value="hamilton">Hamilton</option>
         <option value="invercargill">Invercargill</option>
         <option value="nelson">Nelson</option>
         <option value="wellington">Wellington</option>
         <option value="christchurch">Christchurch</option>
         <option value="dunedin">Dunedin</option>
         <option value="auckland">Auckland</option>
      </select>
        <button type='onsubmit' style={inputstyle}>Get Weather</button>
      </form>
  )
}

export default Form;