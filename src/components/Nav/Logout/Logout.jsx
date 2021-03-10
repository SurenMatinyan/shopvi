import React from 'react';
import classes from './Logout.module.css';
import { NavLink } from 'react-router-dom'
import basket from '../../../assets/basket.png';
import order from '../../../assets/orders.jpg';


const Logout = (props) => {
    return (
        <div className={classes.display}>
            <div className={classes.icon}>
            <img width='28px' className={classes.iconBasket} src={basket} />
            <img width='28px' className={classes.iconBasket} src={order} />
            </div>
            
             <div className={classes.dropdown}>
                <button className={classes.dropbtn}>{props.users.email}</button>
                <div className={classes.dropdownContent}>
                    <NavLink to={"/page"}>MyPage</NavLink>
                    <NavLink to={"#asdd"}>3</NavLink>
                    <NavLink to={"#adsd"}>412312</NavLink>
                    <a onClick={ () => {sessionStorage.clear("token"); props.setUsers({isAuth: false}); console.log("yes")} }>Log Out</a>
                </div>
            </div>
        </div>
    )
}

export default Logout;


///