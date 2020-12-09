import React from "react";
import { useSelector} from "react-redux";


import ResultItem from "./ResultItem";

const Results = () => {

 const resultList = useSelector((state)=>state.search)


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
