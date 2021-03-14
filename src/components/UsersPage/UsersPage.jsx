import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import URL from '../../URL';

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
                <div className={classes.pro}>
                   <div className={classes.productContiner}>
                       <div className={classes.imgCont}>
                         <img src={URL + props.transaction.basket[0].imgURL} />
                       </div>
                       <div>
                           PRICE <br/>
                            {props.transaction.basket[0].price}
                       </div>
                       <div> 
                           NAME <br/>
                            {props.transaction.basket[0].name}
                       </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default UsersPage;