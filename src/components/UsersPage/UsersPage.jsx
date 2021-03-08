import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';


const UsersPage = (props) => {
    console.log("usersPgae",props);
    return (
        <div className={classes.display}>
            <div className={classes.profil}>
                <div className={classes.navBar}>
                    <div className={classes.navLink}>
                        <NavLink  to="/page/d">Purchases</NavLink>
                    </div>
                    <div className={classes.navLink}>
                        <NavLink  to="/page/d">delivery</NavLink>
                    </div>
                    <div className={classes.navLink}>
                        <NavLink  to="/page/d">balance</NavLink>
                    </div>
                </div>
                <div>
                    Products
                </div>
            </div>
        </div>
    )
}


export default UsersPage;