import axios from "axios";

import {
  SEARCH_TERM_REQUEST,
  SEARCH_TERM_SUCESS,
  SEARCH_TERM_FAIL,
  SEARCH_DETAIL_REQUEST,
  SEARCH_DETAIL_SUCESS,
  SEARCH_DETAIL_FAIL,
} from "../constants/termConstants";

// const Hacker_URL = "https://hn.algolia.com/api/v1/search";

export const termSearch = (results) => async (dispatch) => {
  try {
   

    dispatch({ type: SEARCH_TERM_REQUEST });

    const {data} = await axios.get(`http://hn.algolia.com/api/v1/search?query=${results}`)

    dispatch({
      type: SEARCH_TERM_SUCESS,
      payload: data.hits,
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

export const termDetail = (id) => async (dispatch) => {
  try {
   

    dispatch({ type: SEARCH_DETAIL_REQUEST });

    const {data} = await axios.get(`http://hn.algolia.com/api/v1/search?query=${id}`)

    dispatch({
      type: SEARCH_DETAIL_SUCESS,
      payload: data.hits,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
