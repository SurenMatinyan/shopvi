import React, { useState } from 'react';
import classes from './Item.module.css';
import URL from '../../URL';
import { Spinner } from 'react-bootstrap'


 
const Item = function(props){
console.log(props)
    const [ selected, setSelected ] = useState(0);
    const [ count, setCount ]  = useState(1);
    const but = (e, val) => {
        e.preventDefault();
        return val + count >= 1 && setCount(count + val);
    }


    return(
        <div>
           {props.items.option ?  <div className={classes.continer} >
                <div className={classes.itemContiner}>
                    <div className={classes.imgContiner}>
                        <img className={classes.img}  src={URL + props.items.option.img[selected]} />
                        <div className={classes.imgType}>
                            {console.log(props)}
                            {props.items.option.img.map((el, i) =>   <button onClick={()=>{setSelected(i)}}><img width="100%" src={URL + el} alt=""/></button>)}
                            
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
                                {props.items.option.iconImg.map(el => <label className={classes.label} >
                                    <input type="radio" name="psi"/>
                                    <img src={URL + el}/>
                                </label>)}
                                <br/> 

                                <label className={classes.label} >
                                    <input type="radio" name="ll"/>
                                    <p>p</p>
                                </label>
                                
                                <label className={classes.label} >
                                    <input type="radio" name="ll"/>
                                    <p>2ps</p>
                                </label>    <br/> 

                                <div className={classes.count}>
                                    <button onClick={ ( e ) => { but(e, -1)  } }>–</button>
                                        <input type="number" value={count} />
                                    <button onClick={ ( e ) => { but(e, 1) } }>+</button>
                                </div>  
                               
                               <br/>
                                <div className={ classes.add }>
                                    <button>BUY</button><button onClick={ props.addCart } > ADD+</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div> : <div><Spinner /></div>} 

        </div>
    )
}


export default Item;


//  {props.items.option.img.map(el => console.log("asd") ) }
