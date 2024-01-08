import React from 'react'

function Bill(props) {
  return (
    <div>
      <h3>Customer Bill:</h3>
      <h2>${props.total}</h2>

      <button onClick={props.click}>
        Pay
      </button>
    </div>
  )
}

export default Bill
