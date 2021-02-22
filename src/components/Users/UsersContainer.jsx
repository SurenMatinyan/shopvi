import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users.reducer';



const stateToProps = (state) => {
    return { users: state.usersPage.users }
}

const dispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user));
        }
        

    }
}

export default connect(stateToProps, dispatchToProps)(Users);