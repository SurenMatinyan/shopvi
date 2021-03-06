import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';


const SideBar = () => {
    return(
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.category}>
                    <h1>category</h1>
                    <div>
                        <div>MAN</div>
                        <li>shalvar</li>
                        <li>koshik</li>
                        <li>verx</li>
                        <li>glxark</li>
                        <li>aknoc</li>
                        <li>jamacuyc</li>
                    </div>
                    <div>
                         <div>WOMAN</div>
                         <li>shalvar</li>
                        <li>koshik</li>
                        <li>verx</li>
                        <li>glxark</li>
                        <li>aknoc</li>
                        <li>jamacuyc</li>
                    </div>
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