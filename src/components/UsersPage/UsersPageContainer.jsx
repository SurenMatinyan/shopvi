import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import UsersPage from './UsersPage';
import URL from '../../URL';
import { setRemoveAC, setTransactionAC } from '../../redux/transaction.reducer';
import { Spinner } from 'react-bootstrap'


class UsersPageContainer extends React.Component {
    state ={ 
        isLoad: false
    }
    
    componentDidMount(){
        this.setState({ isLoad: false })
        fetch(URL + '/transaction/basket', {headers: {authorization: sessionStorage.getItem("token")}})
        .then(res => res.json())
        .then(result => {
            this.props.setTransaction(result);
            this.setState({ isLoad: true }) 
        })
        .catch(err => console.error(err.message))
    }

    delletBasket(e){
         const itemId = e.target.id;
         fetch(URL + `/transaction/basket/${itemId}`, {
            method: "DELETE",
            headers: { authorization: sessionStorage.getItem("token") }
        })
        .then(res => res.json())
        .then(result => { if(result.status === 0 ) {
            this.props.setRemove(itemId);
        }
    })
    }


    
    render(){
        return (
            <div>
                 {this.state.isLoad 
                 ? this.props.isAuth ? <UsersPage {...this.props} delletBasket={this.delletBasket.bind(this)} /> : <Redirect to="/signup" /> 
                 : <Spinner animation="grow" />}  
            </div>
        )
    }
}
const stateToProps = (state) => {
    return { isAuth: state.usersPage.users.isAuth, transaction: state.transactionPage }
}

const dispatchToProps = (dispatch) => {
    return { setTransaction: (transaction) => dispatch(setTransactionAC(transaction)),
             setRemove: (itemId) => dispatch(setRemoveAC(itemId))  }
}

export default connect(stateToProps, dispatchToProps)(UsersPageContainer);