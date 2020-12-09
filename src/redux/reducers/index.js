import {
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL,
  SAVE_HISTORY
} from "../constants/index";

export const searchReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { loading: true, result: [] };
    case SEARCH_SUCESS:
      return { loading: false, search: action.payload };
    case SEARCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_HISTORY:
      return [ action.payload, ...state ];
   
    default:
      return state;
  }
};
