import React from "react";
import "./styles/style.sass";
const Header = () => {
  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h1 className="newsTitle title">Hacker News</h1>
      </div>
    </div>
  );
};

export default Header;
