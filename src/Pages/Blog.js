import React, { Component } from 'react';
import { Col, Row, Container, Media, ListGroup, Card } from 'react-bootstrap';
import image from "../assets/2.jpg";

export default class Blog extends Component {
    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <Col md="9">
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={image}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={image}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={image}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={image}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5></h5>
                        <Card variant="flush">
                            <ListGroup>
                                <ListGroup.Item>item1</ListGroup.Item>
                                <ListGroup.Item>item2</ListGroup.Item>
                                <ListGroup.Item>item3</ListGroup.Item>
                                <ListGroup.Item>item4</ListGroup.Item>
                                <ListGroup.Item>item5</ListGroup.Item>
                            </ListGroup>
                        
                        </Card>
                        <Card bg="light" variant="flush" className="mt-4">
                            <Card.Body>
                                <Card.Title>Widget</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing 
                                </Card.Text>
                            </Card.Body>
                        
                        </Card>
                        </Col>
                </Row>
            </Container>
        )
    }
}
