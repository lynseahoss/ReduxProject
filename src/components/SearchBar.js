import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayList from "./DisplayList";
import { termSearch } from "../actions/searchTermAction";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const { loading, error, terms } = searchTerm;

  useEffect(() => {
    dispatch(termSearch());
  }, [dispatch]);

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Hackers News Search"
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
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
