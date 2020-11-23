// Action Creator for user's search term
export const searchTerm = term => {
    // Return an action
    return {
      type: 'SEARCH_TERM',
      payload: term
    };
  };