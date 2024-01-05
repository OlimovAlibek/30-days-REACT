import { useState } from "react"
import React, { Component } from 'react'
import Relish from "./Relish"

export class Day_5 extends Component {

state = {
    relishStyles: [
        {name: 'Branston Pickle', description: "A chutney, surprisingly made of fruits"},
        {name: 'Dranston Qickle', description: "A shutney, surprisingly made of fruits"},
        {name: 'Cranston Tickle', description: "A bhutney, surprisingly made of fruits"},
        {name: 'Kranston Kickle', description: "A dhutney, surprisingly made of fruits"},
        {name: 'Wranston Lickle', description: "A whutney, surprisingly made of fruits"}
    ]
}

deleteRelishHandler = (relishIndex) => {
    const relishes = [...this.state.relishStyles]
    relishes.splice(relishIndex, 1)
    this.setState({relishStyles: relishes})
}

  render() {

    let relishes = null
    if (this.state.relishStyles.length > 0) {
        relishes = (
            <div>
                {this.state.relishStyles.map((relish, index) => {
                    return <Relish
                    name={relish.name}
                    description={relish.description}
                    click={() => this.deleteRelishHandler(index)}
                    />
                })}
            </div>
        )
    }
    else {
         relishes = (
            <div>
                <h1>Dont Forget About Relish</h1>
                <button onClick={() => window.location.reload()}>
                    OKAY
                </button>
            </div>
         )
    }

    return (
      <div>
        {relishes}
      </div>
    )
  }
}

export default Day_5
