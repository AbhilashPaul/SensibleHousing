import React, { Component } from 'react';
import './App.css';
import MortgageCalculatorForm from './components/MortgageCalculatorForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './components/CalcFormStyle.css';
import PaymentResults from './components/PaymentResults';
import CalculatorForm from './components/CalculatorForm';
import ButtonCalculate from './components/ButtonCalculate';
import TotalForm from './components/TotalForm';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        amount: 'Mortgage principal amount',
        hintamount: '$ Enter amount',
        interestLabel: 'Interest rate' ,
        information: 'This is usually the purchase price minus your down payment',
        amortization: 'Amortization period',
        paymentLabel: 'Payment frequency',
        text: 'Please enter mortgage amount that is greater than $20,000.00',
        principalAmount: 100000,
        amortizationPeriod: "1 year",
        paymentFrequency: 'Weekly',
        interestRate: "3.09 %",
        showResults : false,
        payment : "",
        total: "Total Payment"
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);

}

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
      [name]: value
  }, 
  () => {
          /* console.log(this.state.interestRate);
          console.log(this.state.principalAmount);
          console.log(this.state.amortizationPeriod);
          console.log(this.state.paymentFrequency); */}
  );
}

//method on click show warning  
clickHandler = () => {
  this.setState ({ 
      showResults: !this.state.showResults
      // text: 'Please enter mortgage amount that is greater than $20,000.00'
  })
}

onClickCalculation = (event) => {
  event.preventDefault(); 
  console.log("Hi");
  let rate =0;
  let principal = 0;
  let period= 0;
  let freq = "";
  freq = this.state.paymentFrequency;
  rate = this.state.interestRate;
  principal=this.state.principalAmount;
  period = this.state.amortizationPeriod;
  rate = rate.slice(0,rate.indexOf(" %"));
  period = period.slice(0,period.indexOf(" y"));

  let paymentsPerYear = 0;
  let numberofPayments = 0;
  let effectiveInterestRate = 0;

  if(freq === "Monthly"){
      paymentsPerYear = 12;
      effectiveInterestRate = rate/1200;
  }else if(freq === "Weekly"){
      paymentsPerYear = 52.1429;
      effectiveInterestRate = rate/5214.29;
  }else{
      paymentsPerYear = 26.0714;
      effectiveInterestRate = rate/2607.14;
  }

  numberofPayments = ( paymentsPerYear* period)+1;

  let paymentAmount = 0;
  let discountFactor = (1+effectiveInterestRate)**numberofPayments;
  paymentAmount = (principal*effectiveInterestRate*discountFactor)/(discountFactor-1);

  console.log(principal, rate, period, paymentsPerYear, numberofPayments, effectiveInterestRate, discountFactor, paymentAmount);
  this.setState ({
      payment: paymentAmount
  });
}

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header"></header>
        </div>
          <Jumbotron fluid>
            <container>
              <h1 className="heading">Mortgage Payment Calculator</h1>
              <p>Use this calculator to compare your option and find the mortgage payment amount that best suits your needs</p>
            </container>
          </Jumbotron>
          <div>
            {/* <MortgageCalculatorForm /> */}
            <CalculatorForm />
            <ButtonCalculate onClick = {this.onClickCalculation}/>
            <TotalForm />
          </div>
          {/* <PaymentResults /> */}
      </div>
    );
  }
}

export default App;
