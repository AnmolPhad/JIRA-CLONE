import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ name = "Jira Clone", category = "SOFTWARE" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const catMap = {
    BUSINESS: "Business",
    MARKETING: "Marketing",
    SOFTWARE: "Software",
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r shadow-sm">

      {/* Project Info */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/96/project.png"
            alt="project"
            className="w-12 h-12"
          />

          <div>
            <h2 className="font-bold text-lg">
              {name}
            </h2>

            <p className="text-gray-500 text-sm">
              {catMap[category]} Project
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="p-4 space-y-2">

        <button
          onClick={() => navigate("/project")}
          className={`w-full text-left px-4 py-3 rounded-lg ${
            location.pathname === "/project"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          📋 Kanban Board
        </button>

        <button
          onClick={() => navigate("/project/settings")}
          className={`w-full text-left px-4 py-3 rounded-lg ${
            location.pathname === "/project/settings"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          ⚙️ Project Settings
        </button>

        <button
          onClick={() => navigate("/project/user-settings")}
          className={`w-full text-left px-4 py-3 rounded-lg ${
            location.pathname === "/project/user-settings"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          👤 User Settings
        </button>

        <hr className="my-4" />

        <div className="text-gray-400 px-4 py-2">
          🚀 Releases
        </div>

        <div className="text-gray-400 px-4 py-2">
          🔍 Issues & Filters
        </div>

        <div className="text-gray-400 px-4 py-2">
          📄 Pages
        </div>

        <div className="text-gray-400 px-4 py-2">
          📊 Reports
        </div>

        <div className="text-gray-400 px-4 py-2">
          🧩 Components
        </div>

      </div>
    </div>
  );
};

export default Sidebar;