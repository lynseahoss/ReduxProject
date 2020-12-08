import {
  SEARCH_TERM_REQUEST,
  SEARCH_TERM_SUCESS,
  SEARCH_TERM_FAIL,
  SEARCH_DETAIL_REQUEST,
  SEARCH_DETAIL_SUCESS,
  SEARCH_DETAIL_FAIL,
} from "../constants/termConstants";

export const searchTermReducer = (state = { terms: [] }, action) => {
  switch (action.type) {
    case SEARCH_TERM_REQUEST:
      return { loading: true, terms: [] };
    case SEARCH_TERM_SUCESS:
      return { loading: false, terms: action.payload };
    case SEARCH_TERM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const searchDetailReducer = (state = { term: {} }, action) => {
  switch (action.type) {
    case SEARCH_DETAIL_REQUEST:
      return { loading: true, ...state };
    case SEARCH_DETAIL_SUCESS:
      return { loading: false, term: action.payload };
    case SEARCH_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// import { SEARCH_TERM } from '../actions/index';

// const SearchReducer =(userTerm = [], action)=>{
//     switch (action.type){
//         case SEARCH_TERM:
//         return [...userTerm, action.payload.term]
//     }
//     return userTerm
// }

// export default SearchReducer
