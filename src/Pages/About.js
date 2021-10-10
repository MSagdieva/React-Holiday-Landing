import { Tab } from 'react-bootstrap'
import React, { Component } from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
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
                            <p>first</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>second</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>third</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <p>fourth</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <p>fifth</p>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
