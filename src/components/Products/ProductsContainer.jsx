import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import URL from  '../../URL';
import { setProductAC, setPageAC } from '../../redux/product.reducer';

class ProductsContainer extends React.Component {


    componentDidMount(){
        fetch(URL + `/products?page=${this.props.page}`)
            .then(res => res.json())
            .then(result => {
                this.props.setProduct(result);
            })
    }
    onPageChang(page){
        this.props.setPage(page);
        fetch(URL + `/products?page=${page}`)
            .then(res => res.json())
            .then(result => {
               this.props.setProduct(result);
            })
    }

    render(){
        return (
            <div>
                <Products {...this.props} onPageChang={this.onPageChang.bind(this)}/> 
            </div>
            
        )
    }
}
const stateToProps = (state) => {
    return { product: state.productPage.product, 
             page: state.productPage.page,
             pageCount: state.productPage.pageCount }
}
const dispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProductAC(product));
        },

        setPage: (page) => {
            dispatch(setPageAC(page));
        }
    }
}



export default connect(stateToProps, dispatchToProps)(ProductsContainer);