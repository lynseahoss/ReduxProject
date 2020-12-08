import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [result, setResult] = useState('')
    
     const submitHandler = e => {
         e.preventDefault()
        onFormSubmit(result)
     }

    return (
        <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <form className="field" onSubmit={submitHandler}>
            <input
              className="input"
              type="text"
              placeholder="Hackers News Search"
              value= {result}
             onChange={e => setResult(e.target.value)}
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
}

export default SearchBar;
