import React, { useState } from 'react'
import Input from './Input'
import Output from './Output'


function Day_2() {

    const [state, setState] = useState({
        currentShout: ""
      })
    
      const updateNewInput = (event) => {
        setState({currentShout: event.target.value})
      }

  return (
    <div>
      <Input changed={updateNewInput}>
        </Input>

        <Output shout={state.currentShout.toUpperCase()}>
        </Output>
    </div>
  )
}

export default Day_2
