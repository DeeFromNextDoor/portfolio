import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useAppContext } from "../../context/AppConetxt";

const Navbar = () => {
  const { toggleTheme, darkMode, navVisible } = useAppContext();

  const [menuVisible, setLinksVisible] = useState(false);

  const handleMenuToggle = () => {
    setLinksVisible(!menuVisible);
  };

  return (
    <div className={`navbar ${navVisible ? "" : "hide"}`}>
      <div className="nav_content">
        <h3 className="nav_logo">Victor.dev</h3>
        <div className="navlinks">
          <div className={`links ${menuVisible ? "slide-in" : ""}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <span className="theme_mode" onClick={toggleTheme}>
            <i
              className={`bi ${
                darkMode ? "bi-brightness-high-fill" : "bi-moon"
              }`}
            ></i>
            {darkMode ? "Go Light" : "Go Dark"}
          </span>
          <i
            className={`bi ${menuVisible ? "bi-menu-up" : "bi-menu-down"}`}
            onClick={handleMenuToggle}
          ></i>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
