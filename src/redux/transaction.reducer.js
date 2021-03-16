const SETTRANSACTION = "SETTRANSACTION";
const REMOVEBASKET = "REMOVEBASKET";

const transactionState = {
    basket: [],
    buying: [],
    finished: [],
}


const transactionReducer = (state = transactionState, action) => {
    switch(action.type){
        case SETTRANSACTION: {
            return { ...state, basket: [...action.trans.basket]}
        }

        case REMOVEBASKET: {
            const remove = state.basket.filter(n => n._id._id !== action.itemId);
            return { ...state, basket: [...remove] }
        }

        default: 
            return state;
    }
}


export const setTransactionAC = ( trans ) => ({type: SETTRANSACTION, trans});

export const setRemoveAC = ( itemId ) => ({type: REMOVEBASKET, itemId});

export default transactionReducer;