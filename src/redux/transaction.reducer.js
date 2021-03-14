const SETTRANSACTION = "SETTRANSACTION";

const transactionState = {
    basket: [],
    buying: [],
    finished: [],
}


const transactionReducer = (state = transactionState, action) => {
    switch(action.type){
        case SETTRANSACTION: {
            console.log(action.trans);
            return { ...state, basket: [...action.trans]}
        }

        default: 
            return state;
    }
}


export const setTransactionAC = ( trans ) => ({type: SETTRANSACTION, trans});

export default transactionReducer;