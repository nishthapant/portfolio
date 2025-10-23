import React from "react";
import { Project } from "./types";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="scroll-text card flex flex-col md:flex-row gap-4 project"
    >
      <div className="w-full h-auto md:w-1/5 md:h-1/5 flex items-center justify-center">
        <img
          src={project.imgSrc}
          alt={project.name}
          className="object-cover w-full h-auto project-img"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 text-center md:text-left md:px-4">
        <div className="project-name flex justify-center md:justify-start gap-2 items-center">
          <div className="text-center md:text-2xl">{project.name}</div>
          <FiExternalLink className="text-[var(--accent)] text-sm md:text-sm opacity-70 hover:opacity-100 transition" />
        </div>
        <div className="project-desc text-[var(--foreground)]">
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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
    </a>
  );
};

export default ProjectCard;
