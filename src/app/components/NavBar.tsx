"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="flex pt-14 px-4">
        <ul className="hidden md:flex items-center justify-start responsive-gap w-full">
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
        <button
          className="md:hidden pl-1 pr-6 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiXMark size={20} /> : <HiMenu size={20} />}
        </button>
        {isOpen && (
          <div className="md:hidden flex gap-8 items-center mobile-menu">
            <a
              href="#about"
              className="py-2 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="py-2 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#work"
              className="py-2 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
