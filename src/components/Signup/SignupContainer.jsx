import React from 'react';
import Signup from './Signup'
import { reduxForm } from 'redux-form';
import URL from '../../URL';

class SignupContainer extends React.Component {

     onSubmit = (formData) => {
          const { name, lastname, email, mobile, password  } = formData;
          console.log(formData)
          if(name && lastname && email && mobile && password){
               fetch(URL + `/users/signup`, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({name, lastname, email, mobile, password}),
               })
               .then(res => res.json())
               .then(result => console.log(result))
               .catch(err => console.log(err.message));
          }
      }


     render(){
          return(  
          <div>
               <Signup {...this.props} onSubmit={this.onSubmit}/>
          </div> )  
     }
}


 

export default SignupContainer;