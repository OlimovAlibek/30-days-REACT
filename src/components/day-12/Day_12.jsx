import React, { Component } from 'react'

export default class Day_12 extends Component {

    state = {
        pictures: []
    }


    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
        .then(results => {
            return results.json()})
            .then(data => {
                let pictures = data.results.map((person => {
                    return (
                        <div>
                            <img src={person.picture.large} />
                            <p>{person.email}</p>
                        </div>
                    )
                }))
            
                this.setState({pictures: pictures})
                console.log(pictures);
            
            })
    }

  render() {
    return (
      <div>
        {this.state.pictures}
      </div>
    )
  }
}
