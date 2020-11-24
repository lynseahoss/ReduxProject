import axios from "axios";

import {
  SEARCH_TERM_REQUEST,
  SEARCH_TERM_SUCESS,
  SEARCH_TERM_FAIL,
} from "../constants/termConstants";

const Hacker_URL = "https://hn.algolia.com/api/v1";

export const termSearch = (term) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_TERM_REQUEST });

    const { data } = await axios.get(`${Hacker_URL}/search?query=${term}`);

    dispatch({
      type: SEARCH_TERM_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_TERM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
