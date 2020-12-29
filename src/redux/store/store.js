import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  searchReducer,
  historyReducer,
  renderHistoryReducer,
  frontPageReducer,
  entertainmentReducer
} from "../reducers";

const reducer = combineReducers({
  // search state
  search: searchReducer,
  history: historyReducer,
  renderHistory: renderHistoryReducer,
  frontPage: frontPageReducer,
  entertainment: entertainmentReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
