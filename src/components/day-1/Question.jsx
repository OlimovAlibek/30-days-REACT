import React from 'react'

const Question = (props) => {

  
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out" onClick={props.click}>
    <p className="text-lg">{props.question}</p>
</div>
  )
}

export default Question
