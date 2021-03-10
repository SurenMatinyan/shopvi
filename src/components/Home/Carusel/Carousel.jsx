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
                src="https://www.teahub.io/photos/full/71-713184_adidas-forum-mid-sneakers.jpg"
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
                src="https://difweb.org/wp-content/uploads/2019/02/Hugo-Boss-vegan-shoes_dezeen_2364_col_15-1500x500.jpg"
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
                src="https://forum.sketchfab.com/uploads/db4890/original/3X/8/a/8abf3e4a1f0602471282b69febc7d6333993407b.jpg"
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