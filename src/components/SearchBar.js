import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import {termSearch} from '../actions/searchTermAction';

const SearchBar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(termSearch())
  }, [dispatch]);

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Hackers News Search"
          ></input>
          <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
          <div className="control">
            <button className="button is-primary is-fullwidth" style={{backgroundColor:"#ea4aaa", margin:"20px"}}>Submit</button>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
