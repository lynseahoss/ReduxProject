import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { searchTermReducer, searchDetailReducer } from '../reducers/searchReducer';

const reducer = combineReducers({
    searchTerm: searchTermReducer,
    searchDetail: searchDetailReducer
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store 