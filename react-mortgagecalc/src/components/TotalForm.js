import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class TotalForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Total Payment</Form.Label>
                                    <Form.Control as="span">$</Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default TotalForm
