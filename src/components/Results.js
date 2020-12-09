import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchAction } from '../redux/actions';
import ResultItem from "./ResultItem";

const Results = () => {
const dispatch= useDispatch()
 const resultList = useSelector((state)=>state.search)
const getResult = ()=>dispatch(searchAction)

useEffect(()=>{
  getResult()
},[])

  const searchResult = resultList.search.map((searchResult) => {
    return <ResultItem key={searchResult.objectID} searchResult={searchResult} />;
  });

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <section className="section">
          <div className="container">
           
              {searchResult}
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;
