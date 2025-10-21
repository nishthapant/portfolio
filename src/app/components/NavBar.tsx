"use client";

import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="flex pt-14 px-4">
        <ul className="flex items-center justify-start responsive-gap w-full">
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
