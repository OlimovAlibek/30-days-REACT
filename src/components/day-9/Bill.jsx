import React from 'react'

function Bill(props) {
  return (
    <div>
      <h1>Total = {props.total}</h1>

      <button onClick={props.click}>
        Calculate
      </button>
    </div>
  )
}

export default Bill
