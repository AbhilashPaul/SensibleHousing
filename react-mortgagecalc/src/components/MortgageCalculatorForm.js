import React, { Component } from 'react'
import './CalcFormStyle.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
//class rce
class MortgageCalculatorForm extends Component {

    // paymentfrequency = ['weekly','bi-weekly','monthly']

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
            total: "Total payment: "
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

    //method
    render() {

        const error = {
            color: "red"
        };

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                    <Form.Group>
                        <Form.Label>{this.state.amount}</Form.Label>
                        <br />
                        <Form.Control placeholder={this.state.hintamount} 
                        className="Amount" name="principalAmount" 
                        onClick = {()=>this.clickHandler()} 
                        onChange={this.handleInputChange}>
                        </Form.Control>
                        <br />
                        <i>{this.state.information}</i>
                        <br />
                        {
                        /* form load hide span element */
                        this.state.showResults ?
                        <div>
                            <span style = {error}>{this.state.text}</span>
                        </div>
                        : null
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{this.state.interestLabel}</Form.Label>
                        <br />
                        <Form.Control  as="select" className="Interest" name="interestRate" onChange={this.handleInputChange}>
                            <option >3.09 %</option>
                            <option >3.34 %</option>
                            <option >3.59 %</option>
                            <option >3.74 %</option>
                            <option >3.89 %</option>
                            <option >3.94 %</option>
                            <option >4.99 %</option>
                            <option >5.64 %</option>
                            <option >5.8 %</option>
                            <option >6.1 %</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{this.state.amortization}</Form.Label>
                        <br />
                        <Form.Control as="select" className="Amortization" name="amortizationPeriod" onChange={this.handleInputChange}>
                        <option >1 year</option>
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
                            <option >25 years</option>
                            <option >26 years</option>
                            <option >27 years</option>
                            <option >28 years</option>
                            <option >29 years</option>
                            <option >30 years</option>   
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{this.state.paymentLabel}</Form.Label>
                        <br />
                        <Form.Control as="select" className="Payment" name="paymentFrequency" onChange={this.handleInputChange}>
                            <option >Weekly</option>
                            <option >Bi-Weekly</option>
                            <option >Monthly</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant='primary' /* className="button" */ onClick = {this.onClickCalculation}>
                        Calculate my payments
                    </Button>   
                    <Form.Group>
                        
                        <br />
                        <Container>
                            <Row>
                                {/* <Col className="total">{this.state.total}{this.state.payment}</Col> */}
                                {/* <Col>{this.state.payment}</Col> */}
                                <Col md={{ span: 6, offset: 3 }}>
                                <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>{this.state.total} $ {this.state.payment}</InputGroup.Text>
                                </InputGroup.Prepend>
                                </InputGroup>
                                </Col>                              
                            </Row>
                        </Container>
                    </Form.Group>                
                </Form>
                        </Col>
                    </Row>
                </Container>
                
                
                {/* <div>
                <label>Payment: </label>
                <span>{this.state.payment}</span>
                </div> */}
            </div>
        )
    }
}

export default MortgageCalculatorForm
