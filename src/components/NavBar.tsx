import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-slate-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          <img src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="freelancer title" className="h-8"/>
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-black hover:opacity-75"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-black hover:opacity-75"
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