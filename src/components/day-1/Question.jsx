import React from 'react'

const Question = (props) => {
  return (
    <div onClick={props.click}>
    <p>{props.question}</p>
    </div>
  )
}

export default Question
