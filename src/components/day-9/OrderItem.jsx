import React from 'react'

function OrderItem(props) {
  return (
    <div>
      <p>{props.item}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default OrderItem
