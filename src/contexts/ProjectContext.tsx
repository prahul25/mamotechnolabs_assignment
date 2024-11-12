import React, { createContext, useContext, useEffect, useState } from "react";
import projectsData from "../data/projects.json"; // Import dummy project data

// Define the structure of a project
export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  budget: string;
  duration: string;
  postedDate: string;
}

// Define the structure of the context value
interface ProjectContextType {
  projects: Project[];
  filteredProjects: Project[];
  setFilters: (filters: FilterType) => void;
}

// Define filter types based on your filter requirements
export interface FilterType {
  search: string;
  skills: string[];
  budgetRange: string;
}

// Initialize context with an empty value
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filters, setFilters] = useState<FilterType>({ search: "", skills: [], budgetRange: "" });

  // Load projects data from JSON on initial render
  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData); // Initially, all projects are displayed
  }, []);

  // Filtering logic to update displayed projects based on filters
  useEffect(() => {
    let filtered = projects;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Skill filter
    if (filters.skills.length > 0) {
      filtered = filtered.filter((project) =>
        filters.skills.every((skill) => project.skills.includes(skill))
      );
    }

    // Budget filter
    if (filters.budgetRange) {
      filtered = filtered.filter((project) => project.budget === filters.budgetRange);
    }

    setFilteredProjects(filtered);
  }, [filters, projects]);

  return (
    <ProjectContext.Provider value={{ projects, filteredProjects, setFilters }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook for using ProjectContext
export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
