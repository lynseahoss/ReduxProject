import React from 'react';

const ResultItem = ({ searchResult }) => {

    
    return (
        <div>
        <h2 className="subtitle mb-0">Article: <strong><a href={searchResult.url} target="blank">{searchResult.title}</a></strong></h2>
      {/* <h3 className="subtitle mb-0">
       Author: {searchResult.author}
      </h3>
      <br/> */}
      <br/>
        </div>
    );
}

export default ResultItem;
