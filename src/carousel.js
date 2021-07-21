import React, { Component } from 'react'
import './carousel.css'

import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'


import Carousel from 'react-bootstrap/Carousel'

class carousel extends React.Component {
    render() {
        return (
            <div id="carousel">

            <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src= {plush1} alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={plush2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={plush3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        ) 
    }
}

export default carousel;