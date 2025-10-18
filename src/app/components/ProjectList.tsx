"use client";

import React from "react";
import projectsData from "../projects.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = projectsData.projects;
  return (
    <div className="max-w-3xl">
      {projects.map((categoryInfo, ind) => (
        <ul key={categoryInfo.category}>
          <div className="category-name">{categoryInfo.category}</div>
          <ul key={ind} className="flex flex-col gap-8 project-category">
            {categoryInfo.projectList.map((project, ind) => {
              return (
                <li key={ind}>
                  <ProjectCard project={project} />
                </li>
              );
            })}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default ProjectList;
