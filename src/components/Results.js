import React from 'react';
import ResultItem from './ResultItem';
const Results = ({ search }) => {
    
        const resultList = search.map(searchResult=>{
          return(
            <ResultItem
            key={searchResult.title}
            searchResult={searchResult}
            />
          )
        })
return(
        <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
  <section className="section">
    <div className="container">
     {resultList}
    </div>
  </section>
</div>
</div>

    );
}

export default Results;
