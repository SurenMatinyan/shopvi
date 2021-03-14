import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Products.module.css';
import SideBar from './SideBar/SideBar';
import URL from '../../URL';

const Products =  function(props) {
    const pageCount = [];
    const page = Math.ceil(props.pageCount/15)  
    for(let i = 1; i <= page; i ++){
        pageCount.push(i);
    }
    
    return (
        <div className={classes.grid}>
            <div><SideBar /></div>

            <div className={classes.pageProduct}>
                <div className={classes.productss}>
                {props.product.map( el => <NavLink to={`/item/${el._id}`}>
                    <div className={classes.product}>
                        <img className={classes.img} width='250px' src={URL + el.imgURL}/>
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
                                <NavLink to={`${props.match.url}?page=${el}`}>{el}</NavLink>
                            )}
                    </div>
                </div>
            </div>
            
        </div>
        
      );
}


export default Products;
 /**/