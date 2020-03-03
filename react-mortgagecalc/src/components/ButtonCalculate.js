import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class ButtonCalculate extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Button variant='primary' /* className="button" */ onClick = {this.onClickCalculation}>
                                Calculate my payments
                            </Button> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ButtonCalculate
