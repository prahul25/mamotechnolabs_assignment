import React, { useState } from "react";
import { FilterType } from "../contexts/ProjectContext";

interface FilterBarProps {
  setFilters: (filters: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilters }) => {
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState("");

  const handleFilterUpdate = () => {
    setFilters({ search, skills, budgetRange });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Additional inputs for skills and budgetRange */}
      <button onClick={handleFilterUpdate}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
