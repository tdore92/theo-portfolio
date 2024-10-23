import React from "react";
import "./NavBar.css";
import "./common/Home.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item grow">
          <a href="#about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item grow">
          <a href="#experience" className="navbar-link">
            Experience
          </a>
        </li>
        <li className="navbar-item grow">
          <a href="#interests" className="navbar-link">
            Interests
          </a>
        </li>
        <li className="navbar-item grow">
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
