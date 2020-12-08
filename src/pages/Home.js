import React, { useState, useEffect} from 'react';
import hackerURL from '../api/hackerURL';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Results from '../components/Results';



const Home = () => {
    const [search, setSearch] = useState([])

    useEffect(()=>{
        onSearchSubmit('')
    },[])

    const onSearchSubmit = async(term)=>{
        const response = await hackerURL.get('/search?&tags=story', {
            params:{
                query:term
            }
        })
        setSearch(response.data.hits)
    }

    return (
        <div>
            <Header/>
            <SearchBar onFormSubmit={onSearchSubmit}/>
            <Results search={search}/>
        </div>
    );
}

export default Home;
