import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navigation = () => {
  const [open, setOpnen] = useState(false);

  return (
    <header>
      <div className="menu-btn">
        <span
          className={!open ? "menu-btn-burger" : "menu-btn-burger open"}
          onClick={() => setOpnen(!open)}
        ></span>
      </div>

      <nav className="nav">
        <ul className={open ? "manu-nav" : "manu-nav open"}>
          <li className="menu-nav-item">
            <Link to="/" className="menu-nav-link active">
              Home
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/projects" className="menu-nav-link">
              Projects
            </Link>
          </li>

          <li className="menu-nav-item">
            <Link to="about.html" className="menu-nav-link">
              About Me
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/skills" className="menu-nav-link">
              Skills
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/contact" className="menu-nav-link">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
