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
      <li key={data}>
        <button
          className="button is-white"
          style={{ textTransform: "uppercase" }}
          onClick={() => submitHistory(data)}
        >
          <strong>{data}</strong>
        </button>
      </li>
    );
  });
  return (
    <div className="box">
      <div className="mb-2">
        <strong>Search History: </strong>
      </div>
      <div>
        {loading ? (
          <h2 className="title">Loading...</h2>
        ) : error ? (
          <h2 className="subtitle mb-0">{error}</h2>
        ) : (
          <ul>{historyResult}</ul>
        )}
      </div>
    </div>
  );
};

export default History;
