"use client";
import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-2 projects">
      <div className="section-heading">Projects</div>
      <p className="projects-heading scroll-text">
        I enjoy building things that make ideas real. Here are some of the
        applications that taught me the most.
      </p>
      <ProjectList />
    </div>
  );
};

export default Projects;
