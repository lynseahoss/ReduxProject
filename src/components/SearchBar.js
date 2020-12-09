import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions';

const SearchBar = () => {
    // const [result, setResult] = useState('')
    
    //  const submitHandler = e => {
    //      e.preventDefault()
    //     onFormSubmit(result)
    //  }

    const dispatch = useDispatch()


    useEffect(()=>{
       dispatch(searchAction())
    },[dispatch])

    const result = []
    return (
        <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <form className="field" >
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
          </form>
          </div>
          </div>
    );
}

export default SearchBar;
