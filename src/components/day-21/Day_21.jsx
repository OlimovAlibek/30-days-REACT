import React, { Component } from 'react'
import People from './People'

export default class Day_21 extends Component {

    state = {
        targetChore: '',
        targetPerson: '',
        people: [
            {name: 'Grace', chores: ['clean kitchen', 'wash dog', 'laundry']},
            {name: 'Sam', chores: ['walk dog', 'wash car', 'go shopping']},
            { name: 'Rose', chores: ['wash windows', 'vaccum', 'clean bathroom'] }
        ]
    }

    onDragStart = (chore, choreOwner) => {
        this.setState({targetChore: chore, targetPerson: choreOwner})
    }

    onDragOver = (e) => {
        e.preventDefault()
    }

    onDrop = () => {
        let people = [...this.state.people]
        let newChoresArray = []
        let newPeopleArray = []
        let personToUpdate = []

        people.forEach(person => {
            if (person.name !== this.state.targetPerson){
                newPeopleArray.push(person)
            }
            else {
                personToUpdate = person
                personToUpdate.chores.forEach(chore =>  {
                    if (chore !== this.state.targetChore) {
                        newChoresArray.push(chore)
                    }
                })

                personToUpdate.chores = newChoresArray
            }
        })

        newPeopleArray.push(personToUpdate)
        this.setState ({ people: newPeopleArray})

    }



  render() {

    let people = (
        <div>
            {this.state.people.map((p) => {
                return <People
                name={p.name}
                onDragStart={(chore, choreOwner) => this.onDragStart(chore, choreOwner)}
                chores={p.chores}
                />
            })}
        </div>
    )
    return (
      <div>
        {people}
            <div className="trash-can"
                    onDrop={() => this.onDrop()}
                    onDragOver={(e) => this.onDragOver(e)}>
                    <h3>Drop completed chores here</h3>
            </div>
      </div>
    )
  }
}
