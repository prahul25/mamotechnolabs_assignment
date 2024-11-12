import React from "react";
import { Project } from "../contexts/ProjectContext";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p>{project.description}</p>
      <p>Skills: {project.skills.join(", ")}</p>
      <p>Budget: {project.budget}</p>
    </div>
  );
};

export default ProjectCard;
