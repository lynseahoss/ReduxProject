import React from 'react';

const ResultItem = ({ searchResult }) => {

    
    return (
        <div>
        <h2 className="subtitle mb-0"> <strong>Article: <a href={searchResult.url} target="blank">{searchResult.title}</a></strong></h2>
      <br/>
        </div>
    );
}

export default ResultItem;
