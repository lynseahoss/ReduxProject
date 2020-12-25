import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchAction, renderHistoryAction } from "../redux/actions";


const History = () => {
  const historyList = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const { loading, error } = historyList;

  const submitHistory = (data) => {
    dispatch(renderHistoryAction(data));
    dispatch(searchAction(data));
  };
  const historyResult = historyList.map((data) => {
    return (
      <div key={data.objectID} onClick={() => submitHistory(data)}>
        <strong>{data}</strong>
      </div>
    );
  });
  return (
    <div className="columns">
      <div className="column is-one-third">
        <div className="box">
          <strong>Search History: </strong>
          
            <div className="container">
              {loading ? (
                <h2 className="title">Loading...</h2>
              ) : error ? (
                <h2 className="subtitle mb-0">{error}</h2>
              ) : (
                [historyResult]
              )}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default History;
