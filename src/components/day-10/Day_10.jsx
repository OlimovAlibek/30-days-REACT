import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoItems from './ToDoItems'

export default class Day_10 extends Component {

    constructor() {
        super()

        this.inputElement = React.createRef()

        this.state = {
            items: [],
            currentItem: {text: '', key: ''}
        }
    }


    handleInput = event => {
        const itemText = event.target.value
        const currentItem = {text: itemText, key: Date.now()}
        this.setState({
            currentItem,
        })
        console.log(currentItem)
        console.log(currentItem.key);
    }


    addItem = event => {
        event.preventDefault()
        const newItem = this.state.currentItem

        if (newItem.text !== '') {
            const items = [...this.state.items, newItem]
            this.setState({
                items:items,
                currentItem:{text:'', key:''}
            })
        }
    }


    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })

        this.setState({
            items: filteredItems
        })
    }

  render() {
    return (
      <div>
        <ToDoList
        addItem={this.addItem}
        inputElement={this.inputElement} 
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}
      />

      <ToDoItems
       entries={this.state.items}
       deleteItem={this.deleteItem}
      />
      </div>
    )
  }
}
