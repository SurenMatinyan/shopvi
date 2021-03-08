import React from 'react';
import classes from './Signup.module.css';
import { Field, reduxForm } from 'redux-form';



const Signup = (props) => {
    

    return (
        <div className={classes.display}>
            <div className={classes.continer}>
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <div className={classes.heading}>
                    <h1>Signu Up</h1>
                    <h5>It’s quick and easy.</h5>
                    </div>
                    <Field component={"input"} placeholder="name" name="name"/><br/>
                    <Field component={"input"} placeholder="lastname" name="lastname"/><br/>
                    <Field component={"input"} placeholder="email" name="email"/><br/>
                    <Field component={"input"} placeholder="mobile" name="mobile"/><br/>
                    <Field component={"input"} placeholder="password" name="password"/><br/>
                    <Field component={"input"} placeholder="Config password" name="configpass"/><br/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}


const SignupForm = reduxForm({
    form: "signup"
})(Signup);

export default SignupForm;