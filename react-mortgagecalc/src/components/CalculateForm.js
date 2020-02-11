import React, { Component } from 'react'
import './CalcFormStyle.css'

//class rce
class CalculateForm extends Component {

    // paymentfrequency = ['weekly','bi-weekly','monthly']

    //construction rconst
    constructor(props) {
        super(props)
    
        this.state = {
            amount: 'Mortgage principal amount',
            principalAmount: 100000,
            amortizationPeriod: 0.5,
            paymentFrequency: 'Weekly',
            hintamount: '$ Enter amount',
            interestLabel: 'Interest rate' ,
            interestRate: 3.09,
            information: 'This is usually the purchase price minus your down payment',
            amortization: 'Amortization period',
            payment: 'Payment frequency',
            text: 'Please enter mortgage amount that is greater than $20,000.00',
            showResults : false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //method on click show warning  
    clickHandler = () => {
        this.setState ({ 
            showResults: !this.state.showResults
            // text: 'Please enter mortgage amount that is greater than $20,000.00'
        })
    }

    handleInputChange(event) {
        console.log("Changed!");
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, 
        () => {
                console.log(this.state.interestRate);
                console.log(this.state.principalAmount);
                console.log(this.state.amortizationPeriod);
                console.log(this.state.paymentFrequency);}
        );
        
    }

    onClickCalculation (event) {
        event.preventDefault(); 
        console.log("Hi");
        let freq = "";
        freq = this.state.paymentFrequency;
        console.log(freq);
    }

    //method
    render() {

        const error = {
            color: "red"
        };

        return (
                <form>
                    <div>
                        <label>{this.state.amount}</label>
                    </div>
                    <div>
                        <input className="Amount" name="principalAmount" onClick = {()=>this.clickHandler()} placeholder={this.state.hintamount} onChange={this.handleInputChange}></input>
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
                        <label>{this.state.interestLabel}</label>
                    </div>
                    <div>
                        <select className="Interest" name="interestRate" onChange={this.handleInputChange}> 
                            <option >3.09%</option>
                            <option >3.34%</option>
                            <option >3.59%</option>
                        </select>
                    </div>
                    <div>
                        <label>{this.state.amortization}</label>
                    </div>
                    <div>
                        <select className="Amortization" name="amortizationPeriod" onChange={this.handleInputChange}>
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
                        <select className="Payment" name="paymentFrequency" onChange={this.handleInputChange}>
                            <option >Weekly</option>
                            <option >Bi-Weekly</option>
                            <option >Monthly</option>
                        </select>
                    </div>
                    <div>
                        <button className="button" onClick = {this.onClickCalculation}>Calculate my payments</button>
                    </div>
                </form>
        )
    }
}

export default CalculateForm
