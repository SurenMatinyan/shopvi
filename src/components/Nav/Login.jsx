import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classes from './Nav.module.css'


const Login =  function(props) {
    return (
        <div className={classes.signin}>
            <div className={classes.form}>
                <form onSubmit={props.handleSubmit} className={classes.input} >
                    <Field component={"input"} name="email" placeholder="EMAIL" />
                    <Field component={"input"} name="password" placeholder="PASSWORD"/>
                    <button>LOGIN</button>
                </form>
            </div>
            <div className={classes.signupButton}>
                <button onClick={( ) => { props.history.push("/signup") }}>SIGNUP</button>
            </div>
            
         </div>
      )
}

const LoginForm = reduxForm({
    form: "login"
})(Login);



export default LoginForm;
