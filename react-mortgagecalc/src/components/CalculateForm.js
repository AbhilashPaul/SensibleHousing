import React, { Component } from 'react'

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
                        <select> 
                            <option >0.5 year</option>
                            <option >2 years</option>
                        </select>
                    </div>
                    <div>
                        <label>{this.state.amortization}</label>
                    </div>
                    <div>
                        <select>
                            <option >0.5 year</option>
                            <option >2 years</option>
                            <option >3 years</option>
                            <option >4 years</option>
                            <option >5 years</option>
                            <option >6 years</option>
                            <option >7 years</option>
                            <option >8 years</option>
                            <option >9 years</option>
                            <option >10 years</option>
                            <option >11 years</option>
                            <option >12 years</option>
                            <option >13 years</option>
                            <option >14 years</option>
                            <option >15 years</option>
                            <option >16 years</option>
                            <option >17 years</option>
                            <option >18 years</option>
                            <option >19 years</option>
                            <option >20 years</option>
                            <option >21 years</option>
                            <option >22 years</option>
                            <option >23 years</option>
                            <option >24 years</option>
                            <option >25years</option>
                        </select>
                    </div>
                    <div>
                        <label>{this.state.payment}</label>
                    </div>
                    <div>
                        <select>
                            <option >Weekly</option>
                            <option >Bi-Weekly</option>
                            <option >Monthly</option>
                        </select>
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
