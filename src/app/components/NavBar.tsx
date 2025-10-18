"use client";

import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="flex">
        <ul className="flex items-center justify-start space-x-6 w-full">
          <li className="nav-option">
            <a href="#about">About</a>
          </li>
          <li className="nav-option">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-option">
            <a href="#work">Experience</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
