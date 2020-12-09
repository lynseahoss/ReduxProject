import React from 'react';

const ResultItem = ({ searchResult }) => {

    
    return (
        <div>
        <h2 className="subtitle mb-0">Article: <strong>{searchResult.title}</strong></h2>
      <h3 className="subtitle mb-0">
       Author: {searchResult.author}
      </h3>
      <h3 className="subtitle mb-0">
       URL: <a href={searchResult.url} target="blank">{searchResult.url}</a>
      </h3>
      <br/>
        </div>
    );
}

export default ResultItem;
