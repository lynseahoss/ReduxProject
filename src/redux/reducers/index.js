import { SEARCH_REQUEST, SEARCH_SUCESS, SEARCH_FAIL } from "../constants/index";

export const searchReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { loading: true, search: [] };
    case SEARCH_SUCESS:
      return { loading: false, search: action.payload };
    case SEARCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
