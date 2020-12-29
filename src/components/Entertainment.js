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
        <div className="container">
        <div className="columns">
            <div className="column">

      <h1 className="newsTitle title">
        Entertainment
      </h1>
            </div>
            </div>
      <div className="columns">
        <div className="column  is-offset-1">
        {loading ? (
          <h2 className="subtitle">Loading...</h2>
        ) : error ? (
          <h2 className="subtitle mb-0">{error}</h2>
        ) : (
          <ol>{entertainmentResult}</ol>
        )}
      </div>
      </div>
      
    </div>
    );
}

export default Entertainment;
