import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction, historyAction } from "../redux/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchAction(search));
    !history.includes(search) && dispatch(historyAction(search));
    setSearch("");
  };

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <form className="field" onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            placeholder="Hackers News Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <div className="control">
                <button
                  className="button is-primary is-fullwidth"
                  style={{ backgroundColor: "#ea4aaa", margin: "20px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
