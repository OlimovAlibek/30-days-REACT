import React from 'react'

function Pet(props) {
  return (
    <div>
      <ul>
        <li>Animal: {props.animal}</li>
        <li>Name: {props.name}</li>
        <li>Owner: {props.owner}</li>
        <li>Illness: {props.illness}</li>
      </ul>
    </div>
  )
}

export default Pet
