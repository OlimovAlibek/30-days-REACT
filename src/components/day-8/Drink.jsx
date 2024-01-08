import React from 'react'

function Drink(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>${props.price}</p>

      <button
      onClick={props.click}>
        Order Drink
      </button>
    </div>
  )
}

export default Drink
