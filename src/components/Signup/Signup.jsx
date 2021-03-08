import React from 'react';
import SignupForm from './Signup/SignupForm';


const Signup = (props) => {

    

    return(
        <div>
            <SignupForm  onSubmit={props.onSubmit}  />
        </div>
    )
}



export default Signup;