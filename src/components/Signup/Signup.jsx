import React from 'react';
import classes from './Signup.module.css';

const Signup = () => {
   
    return (
        <div className={classes.display}>
            <div className={classes.continer}>
                <form className={classes.form}>
                    <div className={classes.heading}>
                    <h1>Signu Up</h1>
                    <h5>It’s quick and easy.</h5>
                    </div>
                    
                    <input type="text" placeholder="name" id="name"/><br/>
                    <input type="text" placeholder="lastname" id="lastname"/><br/>
                    <input type="email" placeholder="email" id="email"/><br/>
                    <input type="tel" placeholder="mobile" id="mobile"/><br/>
                    <input type="password" placeholder="password" id="password"/><br/>
                    <input type="password" placeholder="Config password" id="configpass"/><br/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;