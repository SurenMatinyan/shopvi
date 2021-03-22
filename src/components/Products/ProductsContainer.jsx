import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import URL from  '../../URL';
import { setProductAC, setPageAC } from '../../redux/product.reducer';

class ProductsContainer extends React.Component {


    componentDidMount(){
        const param = this.props.location.search || `?page=${this.props.page}`
        fetch(URL + `${this.props.match.url}` + param)
            .then(res => res.json())
            .then(result => {
                this.props.setProduct({product: result.getProduct, pageCount: result.caunt});
            })
    }

   

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.type !== this.props.match.params.type 
            || nextProps.location.search !== this.props.location.search){
            fetch(URL + `${nextProps.match.url}${nextProps.location.search}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.props.setProduct({product: result.getProduct, pageCount: result.caunt});
            })
        }
    }

   

    render(){
        return (
            <div>
                <Products {...this.props} /> 
            </div>
            
        )
    }
}
const stateToProps = (state) => {
    return { product: state.productPage.product, 
             page: state.productPage.page,
             pageCount: state.productPage.pageCount,
             category: state.productPage.categoryProduct }
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