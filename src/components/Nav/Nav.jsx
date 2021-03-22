import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import Login from './Login';
import URL from '../../URL';
import Logout from './Logout/Logout';
import logo from '../../assets/Viki.jpg';






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
            <div className={classes.ullChild}>
                <ul className={classes.ull}>
                <li className={classes.item}><NavLink to="/" activeClassName={classes.active}>HOME</NavLink></li>
                    <li className={classes.item}><NavLink to="/products/man"   activeClassName={classes.active}>MAN</NavLink></li>
                    <li className={classes.item}><NavLink to="/products/woman" activeClassName={classes.active}>WOMAN</NavLink></li>
                    <li className={classes.item}><NavLink to="/products/children" activeClassName={classes.active}>CHILDREN</NavLink></li>
                    <li className={classes.item}><NavLink to="/page" activeClassName={classes.active}>PROFILE</NavLink></li>
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