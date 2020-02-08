import React, { Component } from 'react'
import Dropdown from './Dropdown'

//class rce
class CalculateForm extends Component {

    // paymentfrequency = ['weekly','bi-weekly','monthly']

    //construction rconst
    constructor(props) {
        super(props)
    
        this.state = {
            amount: 'Mortgage principal amount',
            hintamount: '$ Enter amount',
            interest: 'Interest rate' ,
            information: 'This is usually the purchase price minus your down payment',
            amortization: 'Amortization period',
            payment: 'Payment frequency',
            text: 'Please enter mortgage amount that is greater than $20,000.00',
            showResults : false
            
            
        }
    }

    //method on click show warning  
    clickHandler = () => {
        this.setState ({ 
            showResults: !this.state.showResults
            // text: 'Please enter mortgage amount that is greater than $20,000.00'
        })
    }
    
    //method
    render() {

        const error = {
            color: "red"
        };

        return (
            <div>
                <form>
                    <div>
                        <label>{this.state.amount}</label>
                    </div>
                    <div>
                        <input onClick = {()=>this.clickHandler()} placeholder={this.state.hintamount}></input>
                    </div>
                    <div>
                        <i>{this.state.information}</i>
                    </div>
                    {
                        /* form load hide span element */
                        this.state.showResults ?
                        <div>
                            <span style = {error}>{this.state.text}</span>
                        </div>
                        : null
                    }
                    <div>
                        <label>{this.state.interest}</label>
                    </div>
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <label>{this.state.amortization}</label>
                    </div>
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <label>{this.state.payment}</label>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}} >
                        <Dropdown />
                    </div>
                    <div>
                        <button>Calculate my payments</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CalculateForm
