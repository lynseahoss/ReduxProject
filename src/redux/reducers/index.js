import {
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL,
  SAVE_HISTORY,
  FRONT_STORY_REQUEST,
  FRONT_STORY_SUCESS,
  FRONT_STORY_FAIL,
  RENDER_HISTORY,
  ENTERTAINMENT_REQUEST,
  ENTERTAINMENT_SUCESS,
  ENTERTAINMENT_FAIL
} from "../constants/index";

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

export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_HISTORY:
      return [action.payload, ...state];
    default:
      return state;
  }
};


export const renderHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case RENDER_HISTORY:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const frontPageReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case FRONT_STORY_REQUEST:
      return { loading: true, search: [] };
    case FRONT_STORY_SUCESS:
      return { loading: false, search: action.payload };
    case FRONT_STORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const entertainmentReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case ENTERTAINMENT_REQUEST:
      return { loading: true, search: [] };
    case ENTERTAINMENT_SUCESS:
      return { loading: false, search: action.payload };
    case ENTERTAINMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};