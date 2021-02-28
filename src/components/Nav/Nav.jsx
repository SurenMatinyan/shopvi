import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'



const Nav =  function() {
    return (
        <div className={classes.nav}>
        <div className={classes.logo}>LOGO</div>
        <div>
            <ul className={classes.ul}>
                <li className={classes.item}><NavLink to="/home" activeClassName={classes.active}>HOME</NavLink></li>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>PROFILE</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>DIALOGS</NavLink></li>
                <li className={classes.item}><NavLink to="/products" activeClassName={classes.active}>PRODUCTS</NavLink></li>
            </ul>
        </div>
        <div className={classes.form}>
            <ul>
                <li className={classes.itemform}><NavLink to="/login" activeClassName={classes.active}>LOGIN</NavLink></li>
                <li className={classes.itemform}><NavLink to="/signup" activeClassName={classes.active}>SIGN UP</NavLink></li>
            </ul>
         </div>

     
    </div>
      )
}

export default Nav;
/*
*/