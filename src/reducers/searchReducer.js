import { SEARCH_TERM_REQUEST, SEARCH_TERM_SUCESS,SEARCH_TERM_FAIL } from '../constants/termConstants';

export const searchTermReducer = (state ={term:[]}, action)=>{
    switch(action.type){
        case SEARCH_TERM_REQUEST:
        return { loading: true, term: [] }
        case SEARCH_TERM_SUCESS:
        return{ loading: false, terms: action.payload }
        case SEARCH_TERM_FAIL:
        return{ loading: false, error: action.payload }

        default:
            return state
    }
}
















// import { SEARCH_TERM } from '../actions/index';

// const SearchReducer =(userTerm = [], action)=>{
//     switch (action.type){
//         case SEARCH_TERM:
//         return [...userTerm, action.payload.term]
//     }
//     return userTerm
// }

// export default SearchReducer
