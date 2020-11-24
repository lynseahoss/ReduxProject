import {combineReducers} from 'redux';

const userTermReducer = (userTerm = [], action)=>{
    if(action.type === 'SEARCH_TERM'){
        return [...userTerm, action.payload.term]
    }
    return userTerm
}


export default combineReducers({
    userTerm: userTermReducer    
})