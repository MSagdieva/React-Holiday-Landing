import React, { Component } from 'react';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import image from "../assets/1.jpg";

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Container>
                    <h2 className="text-center">Info</h2>
                    <CardGroup>
                        <Card style={{margin: "10px"}}>
                            <Card.Img variant="top" 
                            src={image}
                            width="100px"/>
                            <Card.Body>
                                <Card.Title>
                                Info1
                                </Card.Title>
                                <Card.Text>
                                    information text
                                </Card.Text>
                                <Button variant="warning">
                                    About info
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: "10px"}}>
                            <Card.Img variant="top" 
                            src={image}/>
                            <Card.Body>
                                <Card.Title>
                                Info1
                                </Card.Title>
                                <Card.Text>
                                    information text
                                </Card.Text>
                                <Button variant="warning">
                                    About info
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: "10px"}}>
                            <Card.Img variant="top" 
                            src={image}/>
                            <Card.Body>
                                <Card.Title>
                                Info1
                                </Card.Title>
                                <Card.Text>
                                    information text
                                </Card.Text>
                                <Button variant="warning">
                                    About info
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        )
    }
}
