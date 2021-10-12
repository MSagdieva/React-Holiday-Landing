import React, { Component } from 'react';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import tree from "../assets/img/forest.jpg";
import jewels from "../assets/img/round.jpg";
import lights3 from "../assets/img/lights2.jpg";

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
                            src={tree}
                            width="100px"/>
                            <Card.Body>
                                <Card.Title>
                                Winter Forest
                                </Card.Title>
                                <Card.Text>
                                    It is a magical place!
                                </Card.Text>
                                <Button variant="warning">
                                <a className="link" href="https://www.forestholidays.co.uk/forestipedia/winter-in-the-forest/">
                                    About Winter in Forest</a>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: "10px"}}>
                            <Card.Img variant="top" 
                            src={jewels}/>
                            <Card.Body>
                                <Card.Title>
                                    Christmas wreath
                                </Card.Title>
                                <Card.Text>
                                    Soon on every door
                                </Card.Text>
                                <Button variant="warning">
                                    <a className="link" href="https://www.floom.com/magazine/article/a-b-wreath-history-of-the-christmas-wreath">
                                    About Christmas wreath's history
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{margin: "10px"}}>
                            <Card.Img variant="top" 
                            src={lights3}/>
                            <Card.Body>
                                <Card.Title>
                                Gardlands
                                </Card.Title>
                                <Card.Text>
                                    Let there be light!
                                </Card.Text>
                                <Button variant="warning">
                                <a className="link" href="https://www.countryliving.com/life/news/a36975/australian-christmas-tree-sets-record-with-518838-lights/">
                                    About where are the most
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        )
    }
}
