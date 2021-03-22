import React from 'react';
import { connect, connnect } from 'react-redux';
import Item from './Item';
import URL from  '../../URL';
import { setItemAC } from '../../redux/item.reducer';


class ItemContainer extends React.Component{
    
    componentDidMount(){
        const productId = this.props.match.params.id;
        fetch(URL + `/products/item/${productId}`)
            .then(res => res.json())
            .then(result => {
                this.props.setItems(result)
            })
            .catch(err => console.log(err.message))
    }


    addCart(event){
        event.preventDefault();
        const { _id } = this.props.items;
        fetch(URL + '/transaction/basket' , {
            method: "PATCH",
            headers: {authorization: sessionStorage.getItem("token"), "Content-Type": "application/json"},
            body: JSON.stringify({_id})
        })
        .catch(err => console.log(err))
    }
    render(){
        return (
                <Item {...this.props}  addCart={this.addCart.bind(this)}/>
        )
    }
}

const stateToProps = (state) => {
    return {items: state.itemPage.items}
    
}

const dispatchToProps = (dispatch) => {
    return{
        setItems: items =>  dispatch(setItemAC(items)) 
    }
        
    
}

export default connect(stateToProps, dispatchToProps)(ItemContainer);
