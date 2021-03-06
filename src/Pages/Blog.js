import React, { Component } from 'react';
import { Col, Row, Container, Media, ListGroup, Card } from 'react-bootstrap';
import street from "../assets/img/street.jpg";
import snow2 from "../assets/img/snow.jpg";
import tinsel from "../assets/img/tinsel.jpg";
import train2 from "../assets/img/train.jpg";

export default class Blog extends Component {
    constructor (props){
        super(props)

        this.state = {
            time: new Date().getHours()
        };
        this.toDate = this.toDate.bind(this);
    }
    toDate(){
        this.setState( state => ({
        time: state.time}));
    }
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
                            src={street}
                            alt={""}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog 1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            alt={""}
                            src={snow2}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog 2</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={tinsel}
                            alt={""}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog 3</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                        <Media style={{display:"flex", alignItems:"center"}}>
                            <img width={150}
                            height={"100%"}
                            className="mr-3"
                            style={{objectFit:"cover"}}
                            src={train2}
                            alt={""}
                            />
                            <Media.Body style={{marginLeft:"30px"}}>
                                <h5>Blog 4</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam alias recusandae fugiat vel aliquid molestiae error expedita. Et adipisci nulla exercitationem consequatur. Cum quo aliquam error, minima asperiores labore doloremque?</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5>Categories</h5>
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
                                <Card.Title>Is is only</Card.Title>
                                <Card.Text>
                                {/* {this.state./time}*/} 
                                a few days before the holidays begins 
                                </Card.Text>
                            </Card.Body>
                        
                        </Card>
                        </Col>
                </Row>
            </Container>
        )
    }
}