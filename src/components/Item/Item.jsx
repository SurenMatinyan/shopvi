import React, { useState } from 'react';
import classes from './Item.module.css';
import URL from '../../URL'


 
const Item = function(props){
console.log(props);
    return(
    <div className={classes.continer}>
        <div className={classes.itemContiner}>
            <div className={classes.imgContiner}>
                <img className={classes.img}  src={URL + props.items.imgURL} />
                <div className={classes.imgType}>
                    <div><img width='100%' src="https://servershopviki.herokuapp.com/images/1gkng4z8klql7424.jpg"/></div>
                    <div><img width='100%' src="https://servershopviki.herokuapp.com/images/1gkng4z8klql7424.jpg"/></div>
                    <div><img width='100%' src="https://servershopviki.herokuapp.com/images/1gkng4z8klql7424.jpg"/></div>
                    <div><img width='100%' src="https://servershopviki.herokuapp.com/images/1gkng4z8klql7424.jpg"/></div>
                </div>
            </div>
            
            <div className={classes.infoContiner}>
                <div className={classes.info}>
                    <div className={classes.name}>NAME {props.items.name}</div>
                    <div className={classes.price}>Գինը {props.items.price} ֏</div>
                    <div className={classes.comment}>COMMENT {props.items.comment}</div>
                </div>
                <div className={classes.formContiner}>
                    <form className={classes.form}>
                        <label className={classes.label} >
                            <input type="radio" name="psi"/>
                            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"/>
                        </label>
                        <label className={classes.label} >
                            <input type="radio" name="psi"/>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg"/>
                        </label> <br/> 

                        <label className={classes.label} >
                            <input type="radio" name="ll"/>
                            <p>p</p>
                        </label>
                        
                        <label className={classes.label} >
                            <input type="radio" name="ll"/>
                            <p>2ps</p>
                        </label>    <br/>    
                        <input type="text"/><br/>
                        <button>BUY</button><button>STORY</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Item;


/*
<div className={classes.itemContiner}>
            <div className={classes.item}>
                <img className={classes.img}  src={'https://servershopviki.herokuapp.com' + props.items.imgURL} />
                <div>
                    <div>NAME {props.items.name}</div>
                    <div>PRICE {props.items.price}</div>
                    <div>COMMENT {props.items.comment}</div>
                </div>
            </div>
        </div>
*/