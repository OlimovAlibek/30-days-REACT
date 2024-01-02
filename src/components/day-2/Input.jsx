import React from 'react'

function Input(props) {
  return (
    <div>
      <input type="text" onChange={props.changed} />
    </div>
  )
}

export default Input
