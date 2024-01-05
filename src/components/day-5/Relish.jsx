import React from 'react'

function Relish(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button onClick={props.click}>Not Now</button>
    </div>
  )
}

export default Relish
