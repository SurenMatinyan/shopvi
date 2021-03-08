import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import UsersPage from './UsersPage';


class UsersPageContainer extends React.Component {
    render(){
        return (
            <div>
                {console.log("isAuth?", this.props.users.isAuth)}
                {this.props.users.isAuth ? <UsersPage {...this.props}/> : <Redirect to="/signup" />}    
            </div>
        )
    }
}
const stateToProps = (state) => {
    return { users: state.usersPage.users }
}

export default connect(stateToProps)(UsersPageContainer);