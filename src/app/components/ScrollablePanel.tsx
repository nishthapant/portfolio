import React from "react";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Footer from "./Footer";

const ScrollablePanel = () => {
  return (
    <div className="overflow-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <div
        id="about"
        className="px-4 sm:px-10 lg:px-20 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16 xl:pb-20"
      >
        <About />
      </div>

      <div
        id="projects"
        className="px-4 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16 xl:pb-20"
      >
        <Projects />
      </div>

      <div
        id="work"
        className="px-4 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16 xl:pb-20"
      >
        <Work />
      </div>

      <div id="footer" className="px-4 sm:px-10 lg:px-20 pb-6 sm:pb-8 lg:pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default ScrollablePanel;
