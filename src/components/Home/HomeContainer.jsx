import React from 'react';
import { connect } from 'react-redux';
import { setNewsProductAC } from '../../redux/product.reducer';
import URL from '../../URL';
import Home from './Home';

class HomeContainer extends React.Component {
    componentDidMount(){
        fetch(URL + '/products/news')
        .then(res => res.json())
        .then(result => {
            this.props.setNewProduct(result);
            console.log(result)
        })
    }

    render(){
        return(
            <div>
                <Home {...this.props}/>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return { newProduct: state.productPage.newsProduct }
}

const dispatchToProps = (dispatch) => {
    return{ setNewProduct: (newProduct) => dispatch(setNewsProductAC(newProduct)) }
}

export default connect(stateToProps, dispatchToProps)(HomeContainer);