import React from "react";
import { useSelector } from "react-redux";

import ResultItem from "./ResultItem";
import History from "./History";


const Results = () => {
  const resultList = useSelector((state) => state.search);
  const { loading, error } = resultList;

  const searchResult = resultList.search.map((searchResult) => {
    return (
      <li key={searchResult.objectID}>
        <ResultItem searchResult={searchResult} />
      </li>
    );
  });
  return (
    <div className="container">
      <div className="columns">
      
        <div className="column is-two-thirds is-offset-1">
          <section className="section">
            {loading ? (
              <h2 className="title">Loading...</h2>
            ) : error ? (
              <h2 className="subtitle">{error}</h2>
            ) : (
              <div>
                <h2 className="title">Articles:</h2>
                <strong>
                  <ol>{searchResult}</ol>
                </strong>
              </div>
            )}
          </section>
        </div>
       
          <div className="column is-one-fifth">
          <History />
        </div>
        
      </div>

    </div>
  );
};

export default Results;
