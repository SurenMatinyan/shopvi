import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';


const SideBar = (props) => {
    console.log(props.location.pathname)
    return(
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.category}>
                    <h1>CATEGORY</h1>
                    <NavLink   className={classes.caty} to={`${props.location.pathname}?child=glxark`}><div className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={`${props.location.pathname}?ggg=asd`}><div className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={`/products/man`}><div className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={`/products/man`}><div className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={`/products/man`}><div className={classes.catDiv}>Պայուսակներ</div></NavLink>
                       
                </div>

                <h1>price</h1>
                <div className={classes.priceInput}>
                    <form action="">
                        <input type="text" placeholder="min"/> - <input type="text" placeholder="max"/>
                        <button>SET</button>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}

export default SideBar;