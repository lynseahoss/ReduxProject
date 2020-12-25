import React from "react";
import { useSelector } from "react-redux";

import ResultItem from "./ResultItem";
import History from './History';

const Results = () => {
  const resultList = useSelector((state) => state.search);
  const { loading, error } = resultList;

  const searchResult = resultList.search.map((searchResult) => {
    return (
      <ResultItem key={searchResult.objectID} searchResult={searchResult} />
    );
  });
  return (
          <div className="container">
    <div className="columns">
    
      <div className="column is-two-thirds is-offset-1">
       
        <section className="section">
        <h2 className="title has-text-centered">Articles</h2>
            {loading ? (
              <h2 className="title">Loading...</h2>
            ) : error ? (
              <h2 className="subtitle">{error}</h2>
            ) : (
              [searchResult]
            )}
        </section>
          </div>
          <div className="column is-one-fifth ">
        <History/>
    </div>
      </div>
    </div>
  );
};

export default Results;
