import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import UsersPage from './UsersPage';
import URL from '../../URL';
import { setTransactionAC } from '../../redux/transaction.reducer';

class UsersPageContainer extends React.Component {
    componentDidMount(){
        fetch(URL + '/transaction/basket', {headers: {authorization: sessionStorage.getItem("token")}})
        .then(res => res.json())
        .then(result => {
            this.props.setTransaction(result.basket);
        })
        .catch(err => console.error(err.message))
    }

    render(){
        return (
            <div>
                {this.props.users.isAuth ? <UsersPage {...this.props}/> : <Redirect to="/signup" />}    
            </div>
        )
    }
}
const stateToProps = (state) => {
    return { users: state.usersPage.users, transaction: state.transactionPage }
}

const dispatchToProps = (dispatch) => {
    return { setTransaction: (transaction) => dispatch(setTransactionAC(transaction))  }
}

export default connect(stateToProps, dispatchToProps)(UsersPageContainer);