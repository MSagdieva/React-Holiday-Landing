import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tree from "../assets/1.jpg";
import lights from "../assets/2.jpg";
import jewels from "../assets/3.jpg";


export default class CarouselBox extends Component {

render() {
        return (
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={jewels}
                    alt='jewels'
                    height='600px'
                    />
                    <Carousel.Caption>
                        <h3>Jewels image</h3>
                        <p>llorem dskre kfd rdskle frws lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={tree}
                    alt='tree'
                    height='600px'
                    />
                    <Carousel.Caption>
                        <h3>Tree image</h3>
                        <p>llorem dskre kfd rdskle frws lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={lights}
                    alt='lights'
                    height='600px'
                    />
                    <Carousel.Caption>
                        <h3>Lights image</h3>
                        <p>llorem dskre kfd rdskle frws lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}