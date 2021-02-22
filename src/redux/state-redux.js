import { createStore, combineReducers } from 'redux';
import reducerMessage from './reducer.message';
import usersReducer from './users.reducer';
const reducer = combineReducers({
    state: reducerMessage,
    usersPage: usersReducer
});

const store = createStore(reducer);

export default store;
