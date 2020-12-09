import { SEARCH_REQUEST, SEARCH_SUCESS, SEARCH_FAIL } from "../constants/index";
import hackerURL from "../../api/hackerURL";

export const searchTerm = () => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const { data } = await hackerURL.get("/search_by_date?&tags=story", {
      params: {
        query: term,
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
