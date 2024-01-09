import React, { Component } from 'react'
import Item from './Item'
import OrderItem from './OrderItem'
import Bill from './Bill'

export default class Day_9 extends Component {

    state = {
        items: [
            {name: 'Filter Coffee', price: 2, id: 0},
            {name: 'Coca Cola', price: 4, id: 0},
            {name: 'Pepsi Cola', price: 5, id: 0},
            {name: 'Fanta Cola', price: 6, id: 0},
            {name: 'Osh Palov', price: 6, id: 1},
            {name: 'Manti', price: 7, id: 1},
            {name: 'Somsa', price: 8, id: 1},
            {name: 'Shashlik', price: 9, id: 1},
        ], 
        customerOrder: [

        ],
        bill:0,
        revenue: 0,
        customerCount:0
    }


    orderItemHandler = (index) =>{
        let currentBill = this.state.bill
        let addBill = this.state.items[index].price
        let allBill = currentBill + addBill

        let customerOrder = [...this.state.customerOrder]
        const newOrder = {}
        newOrder.name = this.state.items[index].name
        newOrder.price = this.state.items[index].price
        customerOrder.push(newOrder)

        this.setState({customerOrder: customerOrder})
        this.setState({bill: allBill})
    }


    payBillHandler = () => {
        let revenue = this.state.revenue
        let bill = this.state.bill
        let newRevenue = revenue + bill

        let customerCount = this.state.customerCount
        let addCustomer = customerCount + 1

        this.setState({revenue: newRevenue})
        this.setState({customerCount: addCustomer})

        this.setState({bill:0})
        this.setState({customerOrder: []})
    }



  render() {

    let drinks =( 
    <div>
        {this.state.items.map((item, index) => {
            if (item.id == 0)
            return <Item
            name={item.name}
            price={item.price}
            click={() => this.orderItemHandler(index)}
            />
        })}
    </div>
    )


    let foods =( 
        <div>
            {this.state.items.map((item, index) => {
                if (item.id == 1)
                return <Item
                name={item.name}
                price={item.price}
                click={() => this.orderItemHandler(index)}
                />
            })}
        </div>
        )


    let orderItems = (
        <div>
            {this.state.customerOrder.map((orderItem, index) => {
                return <OrderItem
                item = {orderItem.name}
                price = {orderItem.price}
                />
            })}
        </div>
    )
    

    return (
      <div>
        

        <div>
            <p>Takings: {this.state.revenue} / CustomerNumbers: {this.state.customerCount}</p>
        </div>

        <div>
            <div>
                <h1>Drinks Menu</h1>
                <ul>
                    {drinks}
                </ul>
            </div>

            <div>
                <h1>Foods Menu</h1>
                <ul>
                    {foods}
                </ul>
            </div>
        </div>


        <div>
            <div>
                <ul>{orderItems}</ul>
            </div>
            <div>
                <Bill
                total={this.state.bill}
                click={() => this.payBillHandler()}
                />
            </div>
        </div>

      </div>
    )
  }
}
