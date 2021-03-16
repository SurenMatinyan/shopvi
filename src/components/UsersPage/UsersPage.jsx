import React, { useState } from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Add from './add/add';
import { Spinner } from 'react-bootstrap'

const UsersPage = (props) => {

    
    return (
        <div className={classes.display}>
            <div className={classes.profil}>
                <div className={classes.navBar}>
                    <span className={classes.navLink}>
                        <NavLink  to="/page?tab=basket">Basket</NavLink>
                    </span>
                    <span className={classes.navLink}>
                        <NavLink  to="/page?tab=buying">buying</NavLink>
                    </span>
                    <span className={classes.navLink}>
                        <NavLink  to="/page?tab=finished">finished</NavLink>
                    </span>
                </div>
                    <Add {...props}/>  
                <div className={classes.buy}>
                    <span>buy</span>
                </div>
            </div>
        </div>
    )
}


export default UsersPage;