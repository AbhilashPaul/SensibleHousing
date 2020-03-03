import React, { Component } from 'react'
import './CalcFormStyle.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverContent from 'react-bootstrap/PopoverContent'


class CalculatorForm extends Component {

constructor(props) {
    super(props)

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
    }
}


    render() {

        const error = {
            color: "red"
        };

        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
          );

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group>
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                    <Form.Control trigger="click" placement="right" overlay={popover}></Form.Control>
                                    {/* <Form>
                                        <Form.Group>
                                            <Form.Control trigger="click" placement="right" overlay={popover}></Form.Control>
                                        </Form.Group>
                                    </Form>  */}                             
                                </OverlayTrigger>
                                <br />
                                <Form.Label>Mortgage principal amount</Form.Label>
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
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CalculatorForm
