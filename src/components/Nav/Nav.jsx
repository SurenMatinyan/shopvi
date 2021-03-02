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
        <div className={classes.signin}>
            <div className={classes.form}>
                <form className={classes.input} >
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD"/>
                    <button>LOGIN</button>
                </form>
            </div>
            <div className={classes.signup}>
                <NavLink to="/signup" activeClassName={classes.active}>SIGN UP</NavLink>
            </div>
        
         </div>

     
    </div>
      )
}

export default Nav;
/*
*/