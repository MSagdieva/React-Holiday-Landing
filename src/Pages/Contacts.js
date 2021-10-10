import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contacts</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress:</Form.Label>
                        <Form.Control type="email" palceholder="Enter email"></Form.Control>
                    
                    <Form.Text>Your privacy is protected
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" row="3"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type = "checkbox" label = "Check me out" />
                    </Form.Group>
                    <Button variant="warning" style={{textAlign: "center", width: '100%' }} type="Submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}
