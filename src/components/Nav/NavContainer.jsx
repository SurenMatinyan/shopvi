import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { setUsersAC } from '../../redux/users.reducer';
import URL from '../../URL';

class NavContainer extends React.Component {
    
    
    componentDidMount(){
        fetch(URL + '/users/auth', {
            headers: {
                authorization: sessionStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === 0) {
                console.log("status@ 0 e", result)
                return this.props.setUsers({...result, isAuth: true});
            } 
            return this.props.setUsers({isAuth: false, name: null});
            
        })
    }


    render (){
        return <Nav {...this.props}/>
    }
}

const stateToProps = (state) => {
    return { users: state.usersPage.users }
}

const dispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(NavContainer);