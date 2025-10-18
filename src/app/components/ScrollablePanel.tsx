import React from "react";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";

const ScrollablePanel = () => {
  return (
    <div className="overflow-auto grid gap-20">
      <div id="about" className="px-20 py-6">
        <About />
      </div>

      <div id="projects" className="px-20 py-20">
        <Projects />
      </div>

      <div id="work" className="px-20 py-20">
        <Work />
      </div>
    </div>
  );
};

export default ScrollablePanel;
