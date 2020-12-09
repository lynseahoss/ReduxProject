import {
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL,
  SAVE_HISTORY
} from "../constants/index";
import hackerURL from "../../api/hackerURL";

export const searchAction = () => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const { data } = await hackerURL.get("/search_by_date?&tags=story", {
      params: {
        query: "data",
      },
    });
    dispatch({
      type: SEARCH_SUCESS,
      payload: data.hits,
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