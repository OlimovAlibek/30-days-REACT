import React, { Component } from 'react';
// import logo from './friedhead.svg';
import Postit from './Postit';
import UpdateForm from './UpdateForm';
import Form from './Form'; 

class Day_22 extends Component {
  state = {
    postits: [
    { title: 'think about relish', content: 'mustard, tomato, fruit', colour: 'pink', key: '123hj$%656' },
    { title: 'pat the cat', content: 'scratch behind the airs and sing to him', colour: 'blue' , key: '456k$%6lMy45' },
  ],
  toggleEditScreen: false,
  postToEdit: undefined,
}

//CREATE POST
createPostit = (colour, title, content) => {
  let postits = [...this.state.postits]
  let newPost = {}

  newPost.colour = colour
  newPost.title = title
  newPost.content = content
  newPost.key = title + Math.random()
  postits.push(newPost)
  this.setState ({ postits: postits})
} 

//Need to: Refractor & combine with onDragStart
//FINDS POST AND SAVES IT READT FOR EDIT, AND TOGGLES EDIT SCREEN
findPostToEdit = (key) => {
  let newPostitsArray = []
  let postits = [...this.state.postits]
  let postToEdit = {}
  
  postits.forEach((post) => {
    if (post.key !== key) {
     newPostitsArray.push(post)
    } else {
     postToEdit = post
    }})
  this.setState ({ postits: newPostitsArray, postToEdit: postToEdit, toggleEditScreen: true })
}

//UPDATE POST
updatePostIt = (colour, title, content) => {
  let postits = [...this.state.postits]
  let postToEdit = this.state.postToEdit
  postToEdit.colour = colour
  postToEdit.title = title
  postToEdit.content = content
  postToEdit.key = title + Math.random()
  postits.push(postToEdit)
this.setState ({ postits: postits, toggleEditScreen: false})
}

// Need to: Refractor & combine with findPostToEdit
// FINDS DRAGGED POST AND SAVES IT READY FOR DELETE
onDragStart = (key) => {
  let newPostitsArray = []
  let postits = [...this.state.postits]
  let postToEdit = {}
  postits.forEach((post) => {
    if (post.key === key) {
     postToEdit = post
    }
  this.setState ({ postToEdit: postToEdit })
})}

onDragOver = (e) => {
  e.preventDefault()
}

//DELETES POST OnDrop
onDrop = () => {
  let key = this.state.postToEdit.key
  let newPostitsArray = []
  let postits = [...this.state.postits]
  postits.forEach((post) => {
    if (post.key !== key) {
     newPostitsArray.push(post)
    } else {
    }})
  this.setState ({ postits: newPostitsArray })
}


render() {
 
 let postits = (
       <div>
        {this.state.postits.map((p) => {
          return <Postit
          colour={p.colour}
          title={p.title}
          content={p.content}
          key={p.key}
          onClick={(key) => this.findPostToEdit(p.key)}
          onDragStart={(key) => this.onDragStart(p.key)}/>
        })
//reversing the array so the latest postit shows first
        .reverse()} 
      </div> 
    );


//EDIT SCREEN VIEW
let editScreen
   if (this.state.toggleEditScreen) {
    editScreen = 
        <UpdateForm 
        colour={this.state.postToEdit.colour}
        title={this.state.postToEdit.title}
        content={this.state.postToEdit.content}
        key={this.state.postToEdit.key} 
        updatePostIt={this.updatePostIt}/>
     } else {
   }


//THE RETURN BLOCK
    return (
      <div className="App">

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Twenty Two / Post-it Notes</h2> */}
     
      <div className="wrapper">  
        <Form createPostit={this.createPostit}/>
         <div className="trash-can"
         onDrop={() => this.onDrop()}
         onDragOver={(e) => this.onDragOver(e)}>
      <h2> 🗑️ </h2>
      <h4> drag & Drop</h4>
        </div>
      </div>

        {/* </header> */}

        <ul>
          {postits}
        </ul>
          {editScreen}
      </div>
    );
  }
}

export default Day_22;