import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { termSearch } from "../actions/searchTermAction";

import DisplayList from './DisplayList';

const SearchBar = (props) => {
  const [search, setSearch]= useState('')

  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  const { loading, error, terms } = searchTerm;

  useEffect(() => {
    dispatch(termSearch());
  }, [dispatch]);


  const handleSubmit = () =>{
     dispatch(termSearch(search))
      !result.includes(search) 
      setSearch("")
   }

   const inputChange = e =>{
   setSearch(e.target.value)
}

  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <form className="field" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Hackers News Search"
            onChange={inputChange}
          />
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <div className="control">
                <button
                  className="button is-primary is-fullwidth"
                  style={{ backgroundColor: "#ea4aaa", margin: "20px" }}
                  onClick={() => props.history.push(`http://hn.algolia.com/api/v1/search?query=${search}`)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
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