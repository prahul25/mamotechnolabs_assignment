import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Freelancer Clone
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-white hover:opacity-75"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-white hover:opacity-75"
            }
          >
            Browse
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;