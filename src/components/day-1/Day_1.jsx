import React, {useState} from 'react'
import Question from './Question';

function Day_1() {

    const [state, setState] = useState({
        question: "Who is ALI?",
        answer: "ALI is a full-stack developer"
      });
    
      const eventHandler = (event) => {
        setState({question: state.answer, answer: state.question})
      }

  return (
    <div>
        <Question question={state.question} click={eventHandler}/>
    </div>
  )
}

export default Day_1


