import React from 'react'

export default function Chore(props) {
  return (
    <div draggable onDragStart={(chore, choreOwner) => props.onDragStart(props.chore, props.choreOwner)}>

        <p>{props.chore}</p>
      
    </div>
  )
}
