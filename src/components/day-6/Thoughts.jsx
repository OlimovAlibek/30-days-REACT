import React from 'react'

function Thoughts(props) {
  return (
    <div>
      <h1>{props.thought}</h1>
      <p>{props.time}</p>
    </div>
  )
}

export default Thoughts
