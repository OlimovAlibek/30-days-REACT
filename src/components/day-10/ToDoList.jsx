import React, { Component } from 'react'

export default class ToDoList extends Component {

    
    componentDidUpdate() {
          this.props.inputElement.current.focus()
        }


  render() {
    return (
      <div>
        <form onSubmit={this.props.addItem}>
            <input type="text" onChange={this.props.handleInput} ref={this.props.inputElement} value={this.props.currentItem.text} placeholder='Task' />
            <button type='submit'>Add task</button>
        </form>
      </div>
    )
  }
}
