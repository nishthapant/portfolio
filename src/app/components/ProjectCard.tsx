import React from "react";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="scroll-text card flex gap-4 project">
      <div className="flex-1 flex project-img">
        <img src={project.imgSrc} alt={project.name} />
      </div>
      <div className="flex-3 flex flex-col gap-4 text-left">
        <div className="project-name">
          <a href={project.links.github}>{project.name}</a>
        </div>
        <div className="project-desc">
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology, ind) => {
            return (
              <span key={ind} className="tag">
                {technology}
              </span>
            );
          })}
        </div>
      </div>

      {/* <a href={project.links.github}>{project.name}</a>
      <p>{project.description}</p>
      
      {project.links.live && (
        <button
          onClick={() =>
            window.open(project.links.live, "_blank", "noopener,noreferrer")
          }
        >
          See Live Demo
        </button>
      )} */}
    </div>
  );
};

export default ProjectCard;
