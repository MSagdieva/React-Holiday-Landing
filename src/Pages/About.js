import { Tab } from 'react-bootstrap'
import React, { Component } from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <h1 className="text-center"> 5 things to do in winter</h1>
                <Tab.Container
                id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        First
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Second
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Third
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        Fourth
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        Fifth
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>Take a walk, see some snow (or touch it, or eat, it's all on you)</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>Get cosy</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>Winter sports (they are really good actually)</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <p>Hot beverage on the street(mulled wine is yummy, especially in -20)</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <p>Snowball fight</p>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
