import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchAction, renderHistoryAction } from "../redux/actions";



const History = () => {
  const historyList = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const { loading, error } = historyList;

  const submitHistory = (dataItem) => {
    dispatch(renderHistoryAction(dataItem));
    dispatch(searchAction(dataItem));
  };
  const historyResult = historyList.map((data) => {
    return (
        <div className="columns">
      <div className="column is-one-third">
      <button key={data.objectID} className="button" style={{ backgroundColor: "#ea4aaa", color:"white", textTransform:"uppercase" }}  onClick={() => submitHistory(data)}>
        <strong>{data}</strong>
      </button>
      </div>
      </div>
    );
  });
  return (
        <div className="box">
          <div className="mb-2">
              <strong>Search History: </strong>
              </div>
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
      
  );
};

export default History;
