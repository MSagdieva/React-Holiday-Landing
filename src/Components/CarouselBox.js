import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tree from "../assets/img/tree.jpg";
import lights from "../assets/img/jewel.jpg";
import jewels from "../assets/img/lights.jpg";


export default class CarouselBox extends Component {

render() {
        return (
            <Carousel variant="dark" style={{height:"80vh", backgroundColor:'#000000'}}>
                <Carousel.Item style={{height: "100%", objectFit:"cover"}}>
                    <img className="d-block w-100"
                    src={jewels}
                    alt='jewels'
                    height='100%'
                    width="100%"
                    />
                    <Carousel.Caption>
                        <h3>Jewels image</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam mollitia, eveniet aperiam harum non quae voluptates, laboriosam saepe libero id, cum nemo vero iure. Laudantium amet optio voluptas blanditiis!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "100%", width:"100%", objectFit:"cover"}}>
                    <img className="d-block w-100"
                    src={tree}
                    alt='tree'
                    height='100%'
                    width="100%"
                    />
                    <Carousel.Caption>
                        <h3>Tree image</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam mollitia, eveniet aperiam harum non quae voluptates, laboriosam saepe libero id, cum nemo vero iure. Laudantium amet optio voluptas blanditiis!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "100%", width:"100%", objectFit:"cover"}}>
                    <img className="d-block w-100"
                    src={lights}
                    alt='lights'
                    height='100%'
                    width="100%"
                    />
                    <Carousel.Caption>
                        <h3>Lights image</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam mollitia, eveniet aperiam harum non quae voluptates, laboriosam saepe libero id, cum nemo vero iure. Laudantium amet optio voluptas blanditiis!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}