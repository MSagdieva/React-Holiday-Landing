import React, { Component } from 'react';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import tree from "../assets/img/forest.jpg";
import lights from "../assets/img/round.jpg";
import jewels from "../assets/img/lights2.jpg";

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
                            src={lights}
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
                            src={tree}/>
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
                            src={jewels}/>
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
