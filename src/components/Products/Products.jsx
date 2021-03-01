import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Products.module.css';
import SideBar from './SideBar/SideBar';

const Products =  function(props) {
    const pageCount = [];
    for(let i = 1; i <= props.pageCount; i ++){
        pageCount.push(i);
    }
    console.log(props.product);
    return (
        <div className={classes.grid}>
            <div><SideBar /></div>

            <div className={classes.pageProduct}>
                <div className={classes.productss}>
                {props.product.map( el => <NavLink to={`/item/${el._id}`}>
                    <div className={classes.product}>
                        <img className={classes.img} width='250px' src={'https://servershopviki.herokuapp.com' + el.imgURL}/>
                        <div className={classes.itemText}>
                            <li>{el.name}</li>
                            <li>{el.comment}</li>
                            <li>{el.price} Դր․</li>
                        </div>
        
                    </div>
                </NavLink>
            ) }
                </div>

                <div className={classes.pageContin}>
                    <div>
                        {pageCount.map( el => 
                                <span className={classes.pageNum} onClick={ () => {props.onPageChang(el)}}>{el}</span>
                            )}
                    </div>
                </div>
            </div>
            
        </div>
        
      );
}


export default Products;