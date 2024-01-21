import React, { Component } from 'react'
import Chore from './Chore'


export default class People extends Component {
  render() {

    let chores = (
        <div>
            {this.props.chores.map((chore, choreOwner) => {
                return <Chore
                onDragStart={(chore, choreOwner) => this.props.onDragStart(chore, choreOwner)}
                chore={chore}
                choreOwner={this.props.name}
                />
            })}
        </div>
    )

    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul>{chores}</ul>
      </div>
    )
  }
}
