import React from 'react';
import classes from './Item.module.css';

const Item = function(props){
    return(
        <div className={classes.item}>
            <img className={classes.img}  src={'https://servershopviki.herokuapp.com' + props.items.imgURL + '.jpg'} />
            <div className={classes.infoCont}>
                <div className={classes.info}>NAME {props.items.name}</div>
                <div className={classes.info}>PRICE {props.items.price}</div>
                <div className={classes.info}>COMMENT {props.items.comment}</div>
            </div>
        </div>
    )
}


export default Item;