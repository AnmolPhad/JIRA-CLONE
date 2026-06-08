import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">

      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/project")}
        >
          Jira Clone
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/project")}
            className="hover:text-gray-200"
          >
            Kanban Board
          </button>

          <button
            onClick={() => navigate("/project/settings")}
            className="hover:text-gray-200"
          >
            Settings
          </button>

          <button
            onClick={() => navigate("/project/user-settings")}
            className="hover:text-gray-200"
          >
            Profile
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search Issues..."
            className="px-3 py-2 rounded text-black outline-none"
          />

          {/* Create Issue */}
          <button
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            + Create Issue
          </button>

          {/* Logout */}
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;