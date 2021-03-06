import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC } from '../../redux/users.reducer';



const stateToProps = (state) => {
    return { users: state.usersPage.users }
}

const dispatchToProps = (dispatch) => {
    return{
        setUsers: (user) => {
            dispatch(setUsersAC(user));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Users);