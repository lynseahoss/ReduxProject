import React from "react";
import { useSelector } from "react-redux";

import ResultItem from "./ResultItem";

const Results = () => {
  const resultList = useSelector((state) => state.search);
  const { loading, error } = resultList;

  const searchResult = resultList.search.map((searchResult) => {
    return (
      <ResultItem key={searchResult.objectID} searchResult={searchResult} />
    );
  });

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <section className="section">
          <div className="container">
            {loading ? (
              <h2 className="title">Loading...</h2>
            ) : error ? (
              <h2 className="subtitle">{error}</h2>
            ) : (
              [searchResult]
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;
