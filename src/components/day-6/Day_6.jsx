import React, { Component } from 'react'
import Thoughts from './Thoughts'

export default class Day_6 extends Component {

    state = {
        thoughts: [
            
        ]
    }

    deleteThoughtHandler = (thoughtIndex) => {
        const thoughts = [...this.state.thoughts]
        thoughts.splice(thoughtIndex, 1)
        this.setState({thoughts: thoughts})
    }

    addThoughtsHandler = (event) => {
        event.preventDefault();
        const thoughts = [...this.state.thoughts]
        const newthought = {}
        newthought.content = this.newThought.value

        var date = new Date()
        var hour = date.getHours()
        var min = date.getMinutes()

        newthought.time = (hour + ":" + min)

        thoughts.push(newthought)

        this.setState({thoughts: thoughts})
        this.newThought.value = null
    }


  render() {

    let thoughts = (
        <div>
            {this.state.thoughts.map((thought, index) => {
                return <Thoughts
                thought={thought.content}
                time={thought.time}
                click={() => this.deleteThoughtHandler}
                />
            }).reverse()}
        </div>
    )


    return (
      <div>
        <form onSubmit={(event) => this.addThoughtsHandler(event)}>
            <input type="text" placeholder='Your Thought' ref={(input) => this.newThought = input} />
            <input type="submit" value="Post" />
        </form>
        
        {thoughts}
      </div>

      
    )
  }
}
