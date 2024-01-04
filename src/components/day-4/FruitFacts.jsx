import React from 'react'

function FruitFacts(props) {
  return (
    <div>
      <h2 >{props.fruit}</h2>
      <p>{props.fact}</p>
    </div>
  )
}

export default FruitFacts
