import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import Login from './Login';
import URL from '../../URL';
import Logout from './Logout/Logout';





const Nav =  function(props) {

    const onSubmit = (formData) => {
        const { email, password } = formData;
        fetch(URL + '/users/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === 0) {
                props.setUsers({...result.user, isAuth: true});
                return sessionStorage.setItem('token', result.token);
            } 
            return console.log("sxal parol");
        })
    }
    
    return (
    <div className={classes.nav}>
        <div className={classes.logo}><img width="100px" height="40px" src="https://lh3.googleusercontent.com/proxy/OADMEYuiRbv02EebYhvK3TYUcOWXGyUWWLlHmTCLikn3J_J2XQwvHyv44wdvBLKtKAf__mj5y2EVG8-fRQv359iYhtgGv6wAaDpvMpeBdm9Gx1JVNW-cwJFAP6EznUzI" /></div>
            <div className={classes.ullChild}>
                <ul className={classes.ull}>
                    <li className={classes.item}><NavLink to="/" activeClassName={classes.active}>HOME</NavLink></li>
                    <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>PROFILE</NavLink></li>
                    <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>DIALOGS</NavLink></li>
                    <li className={classes.item}><NavLink to="/products" activeClassName={classes.active}>PRODUCTS</NavLink></li>
                </ul>
            </div>
        {!props.users.isAuth 
        ? <Login onSubmit={onSubmit}/> 
        : <Logout {...props} />}
    
    </div>
      )
}

export default Nav;
//