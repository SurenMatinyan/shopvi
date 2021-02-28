import { createStore, combineReducers } from 'redux';
import reducerMessage from './reducer.message';
import usersReducer from './users.reducer';
import productReducer from './product.reducer';
import itemReducer from './item.reducer';

const reducer = combineReducers({
    state: reducerMessage,
    usersPage: usersReducer,
    productPage: productReducer,
    itemPage: itemReducer
});

const store = createStore(reducer);
export default store;
