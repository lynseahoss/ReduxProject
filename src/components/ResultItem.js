import React from 'react';

const ResultItem = ({ searchResult }) => {
    return (
        <div>
        <h2 className="subtitle mb-0">Article: <strong>{searchResult.title}</strong></h2>
      <h3 className="subtitle">
       Author: {searchResult.author}
      </h3>
      <br/>
        </div>
    );
}

export default ResultItem;
