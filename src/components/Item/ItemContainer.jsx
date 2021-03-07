import React from 'react';
import { connect, connnect } from 'react-redux';
import Item from './Item';
import URL from  '../../URL';
import { setItemAC } from '../../redux/item.reducer';


class ItemContainer extends React.Component{
    
    componentDidMount(){
        console.log(this.props.match)
        const productId = this.props.match.params.id
        fetch(URL + `/products/item?id=${productId}`)
            .then(res => res.json())
            .then(result => {
                this.props.setItems(result)
            })
    }
    render(){
        return (
                <Item {...this.props} />
        )
    }
}

const stateToProps = (state) => {
    return {items: state.itemPage.items}
    
}

const dispatchToProps = (dispatch) => {
    return{
        setItems: (items) => { dispatch(setItemAC(items)) } 
    }
        
    
}

export default connect(stateToProps, dispatchToProps)(ItemContainer);
