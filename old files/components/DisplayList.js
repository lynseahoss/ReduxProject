import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { termDetail } from '../actions/searchTermAction';

const DisplayList = ({detail}) => {
    const dispatch = useDispatch();
  const detail = useSelector((state) => state.searchTerm);

    useEffect(()=>{
        dispatch(termDetail(detail.params.id))
    }, [dispatch, detail])

    return (
        <div className="container">
        <div className="block">
    <h3>{detail.title}</h3>
   
</div>
</div>
    );
}

export default DisplayList;
