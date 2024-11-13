import React, { useState, useEffect, useCallback } from "react";
import { useProjects } from "../contexts/ProjectContext";
import ProjectCard from "../components/ProjectCard";

const Browse: React.FC = () => {
  const { filteredProjects, setFilters } = useProjects();

  // Separate state for filters
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<[number, number] | null>(null);

  // Stable function to update filters
  const updateFilters = useCallback(() => {
    setFilters({ search, skills, budgetRange });
  }, [setFilters, search, skills, budgetRange]);

  // Reset all filters
  const resetFilters = () => {
    setSearch("");
    setSkills([]);
    setBudgetRange(null);
    setFilters({ search: "", skills: [], budgetRange: null });
  };

  // Real-time searching on changes of filter
  useEffect(() => {
    updateFilters();
  }, [search, skills, budgetRange, updateFilters]);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      const [min, max] = value.split("-").map(Number);
      setBudgetRange([min, max]);
    } else {
      setBudgetRange(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Browse Projects</h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-end">
        <input
          type="text"
          placeholder="Search projects by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-2/5 p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex gap-6">
        {/* Filter by skill */}
        <div className="w-full sm:w-1/4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Filter by Skill</h2>
            <select
              value={skills[0] || ""}
              onChange={(e) => setSkills(e.target.value ? [e.target.value] : [])}
              className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select Skill</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
            </select>
          </div>

          {/* By budget filter */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Filter by Budget</h2>
            <select
              value={budgetRange ? `${budgetRange[0]}-${budgetRange[1]}` : ""}
              onChange={handleBudgetChange}
              className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select Budget Range</option>
              <option value="0-5000">₹0 - ₹5,000</option>
              <option value="5000-15000">₹5,000 - ₹15,000</option>
              <option value="15000-30000">₹15,000 - ₹30,000</option>
            </select>
          </div>

          {/* Reset button to reset all filters */}
          <button
            onClick={resetFilters}
            className="w-full bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            Reset
          </button>
        </div>

        {/* Each project tiles code */}
        <div className="w-full sm:w-3/4">
          <div>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-6">No results found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
