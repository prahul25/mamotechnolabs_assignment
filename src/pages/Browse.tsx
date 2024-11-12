import React, { useState } from "react";
import { useProjects } from "../contexts/ProjectContext";
import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar"; // Optional, for filter controls

const Browse: React.FC = () => {
  const { filteredProjects, setFilters } = useProjects();

  return (
    <div>
      <h1>Browse Projects</h1>
      <FilterBar setFilters={setFilters} /> {/* Pass setFilters to control filters */}
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
