import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Products.module.css';
import SideBar from './SideBar/SideBar';
import URL from '../../URL';
import queryString from 'query-string';

const Products =  function(props) {
    console.log(props.page)
    const onPageChang = (page) => {
        props.setPage(page)
        console.log(page)
    }

    let urlPars =queryString.parse( props.location.search);
    
    urlPars.page = props.page;
    urlPars = queryString.stringify(urlPars)

    const pageCount = [];
    const page = Math.ceil(props.pageCount/15)  
    for(let i = 1; i <= page; i ++){
        pageCount.push(i);
    }
    
    return (
        <div className={classes.grid}>
            <div><SideBar {...props}/></div>

            <div className={classes.pageProduct}>
                <div className={classes.productss}>
                {props.product.map( el => <NavLink style={{textDecoration: "none", }} to={`/item/${el._id}`}>
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
                    <div className={classes.paginaty}>
                        {pageCount.map( el =>
                                <NavLink onClick={( e ) => {window.scrollTo(0, 0); onPageChang(el)  }} className={classes.pagination} to={{  search: urlPars ? urlPars : `page=${el}` } }>{el}</NavLink>  
                                )}
                    </div>
                   
            </div>
            
        </div>
        
      );
}


export default Products;


//