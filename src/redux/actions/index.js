import {
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL,
  SAVE_HISTORY,
  RENDER_HISTORY
} from "../constants/index";
import hackerURL from "../../api/hackerURL";

export const searchAction = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const response = await hackerURL.get(`/search_by_date?&tags=story&hitsPerPage=5&query=${query}` );
    dispatch({
      type: SEARCH_SUCESS,
      payload: response.data.hits,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
  export const historyAction = data => {
    return{
      type: SAVE_HISTORY,
      payload: data
    }
  }

  export const renderHistoryAction = data => {
    return{
      type: RENDER_HISTORY,
      payload: data
    }
  }