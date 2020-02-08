import React, { Component } from 'react'

//class rce
class CalculateForm extends Component {

    //construction rconst
    constructor(props) {
        super(props)
    
        this.state = {
            amount: 'Mortgage principal amount',
            hintamount: '$ Enter amount',
            interest: 'Interest rate' ,
            information: 'This is usually the purchase price minus your down payment',
            amortization: 'Amortization period',
            payment: 'Payment frequency'
            
        }
    }
    
    //method
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>{this.state.amount}</label>
                    </div>
                    <div>
                        <input placeholder={this.state.hintamount}></input>
                    </div>
                    <div>
                        <i>{this.state.information}</i>
                    </div>
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
                    <div>
                        <input></input>
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
