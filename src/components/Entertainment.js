import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { entertainmentAction } from '../redux/actions';

const Entertainment = () => {

    const entertainment = useSelector((state) => state.entertainment);
    const dispatch = useDispatch();
    const { loading, error, search } = entertainment;

    useEffect(() => {
        dispatch(entertainmentAction())
        
    }, [dispatch]);

    return (
        <div>
            
        </div>
    );
}

export default Entertainment;
