import {
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL,
  SAVE_HISTORY,
  RENDER_HISTORY,
  FRONT_STORY_REQUEST,
  FRONT_STORY_SUCESS,
  FRONT_STORY_FAIL,
  ENTERTAINMENT_REQUEST,
  ENTERTAINMENT_SUCESS,
  ENTERTAINMENT_FAIL
} from "../constants/index";
import hackerURL from "../../api/hackerURL";

export const searchAction = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const response = await hackerURL.get(
      `/search_by_date?&tags=story&hitsPerPage=10&query=${query}`
    );
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
export const historyAction = (data) => {
  return {
    type: SAVE_HISTORY,
    payload: data,
  };
};

export const renderHistoryAction = (data) => {
  return {
    type: RENDER_HISTORY,
    payload: data,
  };
};

export const frontStoryAction = () => async (dispatch) => {
  try {
    dispatch({ type: FRONT_STORY_REQUEST });
    const response = await hackerURL.get(
      "search?tags=front_page&hitsPerPage=10"
    );
    dispatch({
      type: FRONT_STORY_SUCESS,
      payload: response.data.hits,
    });
  } catch (error) {
    dispatch({
      type: FRONT_STORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const entertainmentAction = (query) => async (dispatch) => {
  try {
    dispatch({ type: ENTERTAINMENT_REQUEST });
    const response = await hackerURL.get(
      "/search_by_date?&tags=story&hitsPerPage=10&query=entertainment"
    );
    dispatch({
      type: ENTERTAINMENT_SUCESS,
      payload: response.data.hits,
    });
  } catch (error) {
    dispatch({
      type: ENTERTAINMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};