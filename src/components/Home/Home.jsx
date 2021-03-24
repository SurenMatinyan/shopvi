import React from 'react';
import Carousel from './Carusel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.module.css';
import URL from '../../URL';
import { NavLink } from 'react-router-dom';


const Home = (props) => {
    console.log(props);
    return (
        <div className={classes.display}>
            <Carousel />
            <div className={classes.continer}>
                <div className={classes.hed}>FOR MAN</div>
                <div className={classes.productCont}>
                     {props.newProduct.newsMan.map(el => <NavLink className={classes.link} to={`item/${el._id}`}>
                     <div className={classes.product}>
                        <img className={classes.imge} src={URL + el.imgURL}/>
                        <div className={classes.info}>
                            <h6>{el.name}</h6>
                            <h4>{el.price} $</h4>
                        </div>
                     </div> </NavLink> 
                        )
                      }
                </div>
            </div>

            <div className={classes.continer}>
                <div className={classes.hed}>FOR WOMAN</div>
                <div className={classes.productCont}>
                     {props.newProduct.newsWoman.map(el => <NavLink className={classes.link} to={`item/${el._id}`}>
                     <div className={classes.product}>
                        <img className={classes.imge} src={URL + el.imgURL}/>
                        <div className={classes.info}>
                            <h6>{el.name}</h6>
                            <h4>{el.price} $</h4>
                        </div>
                     </div></NavLink> 
                        )
                      }
                </div>
            </div>

            <div className={classes.continer}>
                <div className={classes.hed}>FOR CHILDREN</div>
                <div className={classes.productCont}>
                     {props.newProduct.newsChildren.map(el => <NavLink className={classes.link} to={`item/${el._id}`}>
                     <img className={classes.imge} src={URL + el.imgURL}/>
                     </NavLink>
                     )}
                </div>
            </div>
            
        </div>
    )
}

export default Home;