import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculatorForm from '../components/MortgageCalculatorForm';

function PaymentResults() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}><MortgageCalculatorForm /></Col>
                    <Col>
                        <a href="add">add</a>  
                    </Col>
                </Row>
            </Container>            
        </div>
    )
}

export default PaymentResults
