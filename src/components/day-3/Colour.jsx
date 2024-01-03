import React from 'react'

function Colour(props) {

    let newColor = ("rgb(" + props.c1 + ", " + props.c2 +", " + props.c3 + ")")

    const style = {
        backgroundColor: newColor
    }

  return (
    <div onClick={props.clicked} style={style}>
      <h1>{newColor}</h1>
    </div>
  )
}

export default Colour
