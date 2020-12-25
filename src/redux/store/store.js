import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { searchReducer, historyReducer, renderHistoryReducer} from '../reducers';

const reducer = combineReducers({
    // search state
    search: searchReducer,
    history: historyReducer,
    renderHistory: renderHistoryReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
