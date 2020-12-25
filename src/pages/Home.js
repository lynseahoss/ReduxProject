import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Results from "../components/Results";

const Home = () => {
  const [search] = useState([]);

  return (
    <div>
      <Header />
      <SearchBar />
      <Results search={search} />
    </div>
  );
};

export default Home;
