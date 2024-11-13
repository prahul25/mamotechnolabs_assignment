import React, { createContext, useContext, useEffect, useState } from "react";
import projectsData from "../data/projects.json";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeLeft: string;
  budget: number;
  skills: string[];
  language: string;
  type: string;
}



interface ProjectContextType {
  projects: Project[];
  filteredProjects: Project[];
  setFilters: (filters: FilterType) => void;
}

export interface FilterType {
  search: string;
  skills: string[];
  budgetRange: [number, number] | null;
}


const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filters, setFilters] = useState<FilterType>({ search: "", skills: [], budgetRange: null });

  // loading projects data from JSON to show user
  useEffect(() => {
    console.log(projectsData)
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    let filtered = projects;

    // search filter
    if (filters.search) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // skill filter
    if (filters.skills.length > 0) {
      filtered = filtered.filter((project) =>
        filters.skills.every((skill) => project.skills.includes(skill))
      );
    }

    // budget range filter
    if (filters.budgetRange) {
      const [minBudget, maxBudget] = filters.budgetRange;
      filtered = filtered.filter(
        (project) => project.budget >= minBudget && project.budget <= maxBudget
      );
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
