import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
       <strong>HackerNews</strong> 
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
         
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/topstories">
             Top Stories
            </Link>
            <Link className="navbar-item" to="/entertainment">
              Entertainment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
