import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import DisplayList from '../components/DisplayList';
import SearchBar from '../components/SearchBar';
const Home = () => {
  

    return (
        <div>
            <Header/>
            <SearchBar/>
            <DisplayList/>
        </div>
    );
}

export default Home;
