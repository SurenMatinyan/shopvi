const SETPRODUCT = "SETPRODUCT";
const SETPAGE = "SETPAGE";

const productState = {
    product: [
      
    ],
    page: 2,

    pageCount: 6
}

const productReducer = (state = productState, action) => {
    switch(action.type){
        case SETPRODUCT: {
            return { ...state, product: [...action.product] }
        }

        case SETPAGE: {
            return { ...state, page: action.page}
        }
            
        default: 
            return state;
    }
}


export const setProductAC = (product) => ({type: SETPRODUCT, product});

export const setPageAC = (page) => ({type: SETPAGE, page});

export default productReducer;