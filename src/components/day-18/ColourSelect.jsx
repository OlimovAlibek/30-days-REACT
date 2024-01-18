import React, { Component } from 'react'

export default class ColourSelect extends Component {

    state = {
        colour: 'blue'
    }

    uponSubmit = e => {
        e.preventDefault()
        this.props.choiceConfirmed(this.state.colour)
    }

  render() {

    
    return (
      <div>
        <h3>{this.state.colour}</h3>

        <form action="">
            <select onChange={e => this.setState({colour: e.target.value})} name="" id="">
                <option value="" disabled>Select a new colour</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
            </select>
            <button onClick={e => this.uponSubmit(e)}>Change Color</button>
        </form>
      </div>
    )
  }
}
