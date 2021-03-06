import React from 'react';
import classes from './Carousel.module.css';
import { Carousel } from 'react-bootstrap'

const Carousele = () => {
    return (
        <div className={classes.Carousel}>
              <Carousel>
            <Carousel.Item>
                <img  height="500"
                className="d-block w-100"
                src="https://images.hdqwalls.com/download/lexus-lc-500-limited-edition-2018-front-7g-1360x768.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  height="500"
                className="d-block w-100"
                src="https://images.hdqwalls.com/download/lexus-lc-500-drifting-rq-1360x768.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="500"
                className="d-block w-100"
                src="https://images.hdqwalls.com/download/2021-lexus-lc-500-convertible-by-1360x768.jpg"
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

export default Carousele;