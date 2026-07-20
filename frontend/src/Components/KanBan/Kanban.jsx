
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Columns from "../Columns/Columns";

export const KanbanContext = createContext(null);

function Kanban() {
  return (
    <KanbanContext.Provider value={users}>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-gray-500 text-sm mb-6">
          <span>Projects</span>
          <span>/</span>
          <span>{name}</span>
          <span>/</span>
          <span>Kanban Board</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Kanban Board</h1>

          <div className="flex gap-3">
            <a
              href="https://github.com/herman-19/Jira-Clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                <GithubIcon />
                Github Repo
              </button>
            </a>

            <button
              onClick={onLogoutClick}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
            <SearchIcon w="14" h="14" />
            <input
              type="text"
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
              placeholder="Search issues..."
              className="ml-2 outline-none bg-transparent"
            />
          </div>

          {/* User Icons */}
          <div className="flex gap-2">
            {users.map((u) => (
              <div
                key={u.person_id}
                onClick={() => toggleUser(u.person_id)}
                className={`w-10 h-10 rounded-full bg-cover bg-center cursor-pointer border-2 ${
                  selectedUsers.includes(u.person_id)
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                style={{
                  backgroundImage: `url(${u.url})`,
                }}
                title={u.name}
              />
            ))}
          </div>

          {/* Buttons */}
          <button
            onClick={() => setMyIssuesSelected(!myIssuesSelected)}
            className={`px-4 py-2 rounded transition ${
              myIssuesSelected
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Only My Issues
          </button>

          <button
            onClick={() =>
              setRecentlyUpdatedSelected(!recentlyUpdatedSelected)
            }
            className={`px-4 py-2 rounded transition ${
              recentlyUpdatedSelected
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Recently Updated
          </button>

          {filtersEnabled && (
            <button
              onClick={clearFilters}
              className="text-red-500 font-medium hover:text-red-700"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Columns */}
        <Columns issues={filteredIssues} />
      </div>
    </KanbanContext.Provider>
  );
}

export default Kanban;