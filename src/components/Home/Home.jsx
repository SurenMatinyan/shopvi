import React from 'react';
import Carousel from './Carusel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.display}>
            <Carousel />
            <div><h1>PRODUCT1</h1></div>
            <div><h1>PRODUCT2</h1></div>
            <div><h1>PRODUCT3</h1></div>
        </div>
    )
}

export default Home;