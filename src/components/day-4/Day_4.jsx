import React, { Component } from 'react';
import FruitFacts from './FruitFacts';

class Day_4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [
        { name: "Banana", fact: "I am yellouvvv" },
        { name: "Cherry", fact: "I am redddd" },
        { name: "Strawberry", fact: "I am unique reddd" }
      ],
      showFruits: false,
      showFruitMessage: "Show me Fruit Facts"
    };
  }

  fruitFactsHandler = () => {
    this.setState((prevState) => ({
      showFruits: !prevState.showFruits,
      showFruitMessage: prevState.showFruits ? "Show me Fruit Facts" : "Fruit facts are boring",
    }));
  };

  render() {
    let FruitFactsComponent = null;

    if (this.state.showFruits && Array.isArray(this.state.fruits)) {
      FruitFactsComponent = (
        <div className='container'>
          {this.state.fruits.map((fruit, index) => (
            <FruitFacts key={index} fruit={fruit.name} fact={fruit.fact} />
          ))}
        </div>
      );
    }

    return (
      <div className='container'>
        <button onClick={this.fruitFactsHandler}>{this.state.showFruitMessage}</button>
        {FruitFactsComponent}
      </div>
    );
  }
}

export default Day_4;
