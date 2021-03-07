import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import Login from './Login';
import URL from '../../URL';





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
            if(result.status === 0) return props.setUsers({...result.user, auth: true});
            return console.log("sxal parol");
        })
    }
    
    return (
    <div className={classes.nav}>
        <div className={classes.logo}>VIKI</div>
        <div>
            <ul className={classes.ul}>
                <li className={classes.item}><NavLink to="/home" activeClassName={classes.active}>HOME</NavLink></li>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>PROFILE</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>DIALOGS</NavLink></li>
                <li className={classes.item}><NavLink to="/products" activeClassName={classes.active}>PRODUCTS</NavLink></li>
            </ul>
        </div>

        {!props.users.auth ? <Login onSubmit={onSubmit}/> : <div>{props.users.email}Log Out</div>}
        

    </div>
      )
}

export default Nav;
