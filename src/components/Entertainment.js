import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { entertainmentAction } from '../redux/actions';
import EntertainmentItem from './EntertainmentItem';

const Entertainment = () => {

    const entertainment = useSelector((state) => state.entertainment);
    const dispatch = useDispatch();
    const { loading, error, search } = entertainment;

    useEffect(() => {
        dispatch(entertainmentAction())
        
    }, [dispatch]);

    const entertainmentResult = 
        search.map((data) => {
            return (
                <li key={data.objectID}>
                   <EntertainmentItem entertainmentResult={data}/>
                </li>
              );
      });

    return (
        <div>
            
        </div>
    );
}

export default Entertainment;
