import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";


import { frontStoryAction } from "../redux/actions";
import FrontPageItem from './FrontPageItem';


const FrontPage = () => {
  const frontPage = useSelector((state) => state.frontPage);
  const dispatch = useDispatch();
  const { loading, error, search } = frontPage;

  useEffect(() => {
      dispatch(frontStoryAction())
      
  }, [dispatch]);
 
  const frontStoryResult = 
        search.map((data) => {
            return (
                <li key={data.objectID}>
                   <FrontPageItem frontPageResult={data}/>
                </li>
              );
      });
  
  return (
    <div className="container">
        <div className="columns">
            <div className="column">

      <h1 className="newsTitle title">
        Top Stories 
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
          <ol>{frontStoryResult}</ol>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default FrontPage;