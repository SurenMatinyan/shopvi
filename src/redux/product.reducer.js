const SETPRODUCT = "SETPRODUCT";
const SETPAGE = "SETPAGE";
const SETNEWPRODUCT = "SETNEWPRODUCT";

const productState = {
    product: [
      
    ],

    newsProduct: {
        newsMan: [],
        newsWoman: [],
        newsChildren: []
    },

    categoryProduct: {
        forMen: ["pants", "hat", "jeans", "shoes"],
        forWoman: ["pants", "hat", "jeans", "shoes", "glasses", "skirts"],
        forChildren: []
    },
    
    page: 1,

    pageCount: null
}

const productReducer = (state = productState, action) => {
    switch(action.type){
        case SETPRODUCT: {
            return { ...state, product: [...action.product.product], pageCount: action.product.pageCount }
        }

        case SETNEWPRODUCT: {
            console.log(action.newProduct)
            return { ...state, newsProduct: {...action.newProduct}}
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

export const setNewsProductAC = (newProduct) => ({type: SETNEWPRODUCT, newProduct});

export default productReducer;