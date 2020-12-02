import React from 'react';
import { termSearch } from '../actions/searchTermAction';

const DisplayList = () => {
    return (
        <div className="container">
        <div className="block">
    <h3>{termSearch.title}</h3>
    {termSearch.author}
    {termSearch.url}
    {termSearch.comments}
</div>
</div>
    );
}

export default DisplayList;
