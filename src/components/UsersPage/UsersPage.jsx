import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Add from './add/add';

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



/*                <div className={classes.pro}>
                   <div className={classes.productContiner}>
                       <div className={classes.imgCont}>
                         <img src={URL + props.transaction.basket[0].imgURL} />
                       </div>
                       <div className={classes.name}>
                           NAEM <br/>
                           {props.transaction.basket[0].name}
                           
                       </div>
                       <div className={classes.price}> 
                           PRICE <br/>
                           {props.transaction.basket[0].price}
                       </div >
                       <div className={classes.caunt}>
                           <input type="number"/>
                       </div>
                       <div className={classes.total}>
                            <div>
                                {props.transaction.basket[0].price}
                            </div>
                       </div>
                    </div>
                </div>*/