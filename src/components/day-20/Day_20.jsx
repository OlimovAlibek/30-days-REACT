import React, { Component } from 'react';
import Trash from './Trash';
import './scss.css';



class Day_20 extends Component {
  state = {
    status: 'NA',
    targetTrashId: null,
    
    trash: [
    { name: "banana peel", id: 0},
    { name: "beer can", id: 1}, 
    { name: "apple core", id: 2},
    { name: "chip packet", id: 3}
    ]
}

//THREE STAGES OF DRAG AND DROP

onDragStart = (id) => {
  this.setState ({ status: 'onStart', targetTrashId: id}) //saves dragged item id
}

onDragOver = (e) => {
  e.preventDefault();
  this.setState ({ status: 'onDragOver'})
}

onDrop = () => {
  let trash = [...this.state.trash]   // copys current trash items
  let id = this.state.targetTrashId   // pulls the targeted trash item

  let newTrashArray = []   // declares new array
  trash.forEach( item => {   // sorts & pushes items excluding targettrash into new array 
    if (item.id !== id) {
    newTrashArray.push(item) }
  })
 this.setState ({ status: 'onDrop', trash: newTrashArray })
}

//RENDER BLOCK

render() {

  let trash = (
    <div>
    {this.state.trash.map((item) => {
      return <Trash 
      onDragStart={() => this.onDragStart(item.id)}
      name={item.name}
      id={item.id}
      colour={item.colour}/>
    })}
    </div>
  )


//RETURN BLOCK

    return (
    <div className="App">
  


    <h3>Drag Status: {this.state.status}</h3>
     
     {trash}

     <img src={require('./trashcan.png')} 
     className="trash-can"
     onDragOver={(e) => this.onDragOver(e)}
     onDrop={(id) => this.onDrop()}/>

    </div>

    );
  }
}

export default Day_20;