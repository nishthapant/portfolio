"use client";

import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full py-6 px-20 fixed z-50 backdrop-blur-md">
      <div className="flex items-center justify-start">
        <ul className="flex justify-center space-x-12">
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
