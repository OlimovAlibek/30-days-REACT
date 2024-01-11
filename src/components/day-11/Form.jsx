import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.loadweather}>
      <input type="text" name="city" placeholder="City..."  />
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
  )
}

export default Form
