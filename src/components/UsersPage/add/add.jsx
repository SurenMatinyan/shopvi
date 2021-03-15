import React from 'react';
import classes from './add.module.css'
import URL from '../../../URL';
import trashIcon from '../../../assets/trash.png';

const Add = (props) => {
    return( 
        <div>
    {props.transaction.basket.map(el => 
        <div className={classes.pro}>
        <div className={classes.productContiner}>
            <div className={classes.imgCont}>
              <img src={URL + el._id.imgURL} />
            </div>
            <div className={classes.name}>
                SIZE <br/>
                {el._id.name}
                
            </div>
            <div className={classes.price}> 
                PRICE <br/>
                {el._id.price}
            </div >
            <div className={classes.caunt}>
                <input type="number"/>
            </div>
            <div className={classes.total}>
                 <div>
                     {el._id.price}
                 </div>
            </div>
            <div className={classes.trashIcon}>
                <span onClick={ props.delletBasket }> 
                    <img  id={el._id._id}  src={trashIcon}/>
                </span>
                
            </div>
         </div>
         
     </div>
    )}
      </div>  
    )
}


export default Add;