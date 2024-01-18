import React, { Component } from 'react'
import ColourSelect from './ColourSelect'

export default class Day_18 extends Component {

    state = {
        colour: 'Blue'
    }

    onSubmit = colourChoice => {
        this.setState({colour: colourChoice})
    }
  render() {

    const colourSection = {
        padding: '30px',
        backgroundColor: this.state.colour
    }
    return (
      <div style={colourSection}>

        <ColourSelect choiceConfirmed={colourChoice => this.onSubmit(colourChoice)} colour={this.state.colour}>
        </ColourSelect>
        
      </div>
    )
  }
}
