import axios from 'axios';

import { SEARCH_TERM_REQUEST, SEARCH_TERM_SUCESS, SEARCH_TERM_FAIL} from '../constants/termConstants';

export const termSearch = () => async (dispatch)=>{
    try {
        dispatch({type:SEARCH_TERM_REQUEST})

        const {data}= await axios.get()
        
        dispatch({type: SEARCH_TERM_SUCESS})

    } catch (error){

    }
}