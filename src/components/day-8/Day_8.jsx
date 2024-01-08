import React, { Component } from 'react'
import Drink from './Drink'
import Bill from './Bill'

export default class Day_8 extends Component {

    state = {
        drinks: [
            {name: 'Mojito', price: 3},
            {name: 'Cola', price: 2},
            {name: 'Pepsi', price: 5},
            {name: 'Fanta', price: 1},
            {name: 'Sprite', price: 10},
            {name: 'Coffee', price: 12},
        ],
        bill: 0

        
    }



    addDrinkHandler = (drinkIndex) => {
        let currentbill = this.state.bill
        let addToBill = this.state.drinks[drinkIndex].price
        let newBill = currentbill + addToBill
        this.setState({bill: newBill})
        
    }

    payBillHandler = () =>{
        this.setState({bill: 0})
    }


  render() {

    let drinks = (
        <div>
            {this.state.drinks.map((drink, index) => {
                return <Drink
                name={drink.name}
                price={drink.price}
                click={()=> this.addDrinkHandler(index)}
                
                />
            })}
        </div>
    )


    return (
      <div>
        <ul>
            {drinks}
        </ul>

        <div>
            <Bill
            total={this.state.bill}
            click={()=> this.payBillHandler() }/>
        </div>
      </div>
    )
  }
}
