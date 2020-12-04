import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { termSearch } from "../actions/searchTermAction";

import DisplayList from './DisplayList';

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
      <div className="column is-three-fifths is-offset-one-fifth">
  {loading ? (<h2>Loading</h2>): error ?(<h2>{error}</h2>): ( <div>{terms.map((data, index)=>(
          <DisplayList key={index} title={data.title}/>
        ))}</div>)}
       
      </div>
      </div>
    </div>
  );
};

export default SearchBar;