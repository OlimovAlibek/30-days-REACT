import { useState } from "react"
import React from 'react'
import Colour from "./Colour"

function Day_3() {

    const [state, setState] = useState({
        colour1: 137,
        colour2: 50,
        colour3: 200 
    })

    const randomColour = () => {
        return Math.floor(Math.random()*250) + 1
    }

    const colourgGenerator = (event) => {
        setState({colour1: randomColour(), colour2: randomColour(), colour3: randomColour()})
    } 


  return (
    <div>
      <Colour clicked={colourgGenerator} c1={state.colour1.toString()} c2={state.colour2.toString()} c3={state.colour3.toString()}>
      </Colour>
    </div>
  )
}

export default Day_3
