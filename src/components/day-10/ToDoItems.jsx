import React, { Component } from 'react'

export default class ToDoItems extends Component {

    createItems = item => {
        return (
            <li onClick={() => this.props.deleteItem(item.key)} key={item.key}>
                {item.text}
            </li>
        )
    }

  render() {

    const toDoEntries = this.props.entries
    const listItems = toDoEntries.map(this.createItems)


    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

