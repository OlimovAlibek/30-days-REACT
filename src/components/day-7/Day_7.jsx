import React, { Component } from 'react';
import Pet from './Pet';

export default class Day_7 extends Component {

    state = {
        pets: [
            { animal: 'Cat', animalName: 'Mikky', owner: 'Ali', illness: 'sick' },
            { animal: 'Dog', animalName: 'Tuzik', owner: 'John', illness: 'ill' }
        ]
    }

    addPetHandler = (event) => {
        event.preventDefault();
        const pets = [...this.state.pets]
        const newPet = {}

        newPet.animal = this.newAnimal.value
        newPet.animalName = this.newAnimalName.value
        newPet.owner = this.newAnimalOwner.value
        newPet.illness = this.newAnimalIllness.value

        var date = new Date()
        var day = date.getDate();  // Fix: use getDate instead of getDay
        var month = date.getMonth() + 1;  // Fix: getMonth returns zero-based month
        var year = date.getFullYear()

        // Handle single-digit day or month
        var formattedDay = day < 10 ? '0' + day : day;
        var formattedMonth = month < 10 ? '0' + month : month;

        newPet.date = (formattedDay + "/" + formattedMonth + "/" + year)

        pets.push(newPet)
        this.setState({ pets: pets })

        this.newAnimal.value = null
        this.newAnimalName.value = null
        this.newAnimalOwner.value = null
        this.newAnimalIllness.value = null
    }

    render() {

        let pets = (
            <div>
                {this.state.pets.map((pet) => {
                    return <Pet
                        animal={pet.animal}
                        name={pet.animalName}
                        owner={pet.owner}
                        illness={pet.illness}
                    />
                }).reverse()}
            </div>
        )

        return (
            <div>
                <form onSubmit={(event) => this.addPetHandler(event)}>
                    <h3>Add Pet</h3>

                    <select ref={(input) => this.newAnimal = input}>
                        <option value="" disabled selected></option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Rodent">Rodent</option>
                        <option value="Fish">Fish</option>
                    </select>

                    <input placeholder='pet name' type="text" ref={(input) => this.newAnimalName = input} />
                    <input placeholder='pet illness' type="text" ref={(input) => this.newAnimalIllness = input} />
                    <input placeholder='pet owner' type="text" ref={(input) => this.newAnimalOwner = input} />

                    <input type="submit" value="add pet" />
                </form>

                <ul>
                    {pets}
                </ul>
            </div>
        )
    }
}
