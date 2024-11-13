import React from "react";
import { Project } from "../contexts/ProjectContext";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-md mb-4 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex items-center mb-2">
        <span className="font-semibold text-gray-700 mr-1">Skills:</span>
        <span className="text-gray-700">{project.skills.join(", ")}</span>
      </div>

      <div className="flex items-center">
        <span className="font-semibold text-gray-700 mr-1">Budget:</span>
        <span className="text-gray-700">₹{project.budget}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
