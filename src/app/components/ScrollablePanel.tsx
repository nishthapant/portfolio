import React from "react";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";

const ScrollablePanel = () => {
  return (
    <div className="overflow-auto flex flex-col gap-8 sm:gap-12 lg:gap-20">
      <div
        id="about"
        className="px-4 sm:px-10 lg:px-20 pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20"
      >
        <About />
      </div>

      <div
        id="projects"
        className="px-4 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20"
      >
        <Projects />
      </div>

      <div id="work" className="px-4 sm:px-10 lg:px-20 pb-12 sm:pb-16 lg:pb-20">
        <Work />
      </div>
    </div>
  );
};

export default ScrollablePanel;
