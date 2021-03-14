import { createStore, combineReducers } from 'redux';
import reducerMessage from './reducer.message';
import usersReducer from './users.reducer';
import productReducer from './product.reducer';
import itemReducer from './item.reducer';
import transactionReducer from './transaction.reducer';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    state: reducerMessage,
    usersPage: usersReducer,
    productPage: productReducer,
    itemPage: itemReducer,
    transactionPage: transactionReducer,
    form: formReducer
});

const store = createStore(reducer);
export default store;
