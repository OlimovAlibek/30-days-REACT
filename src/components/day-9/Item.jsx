import React from 'react'

function Item(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <button onClick={props.click}>les go</button>
    </div>
  )
}

export default Item
