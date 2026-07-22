import { useState } from "react";
import { Search } from "../../icons";
import Columns from "../Columns/Columns";
import issuesData from "../../Data/issues.js";

const Kanban = () => {
  const [issues] = useState(issuesData);
  const [searchText, setSearchText] = useState("");

  // Search Filter
  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center text-[14px] text-[#5E6C84] font-semibold">
        <span>Projects</span>
        <span className="mx-2">/</span>
        <span>Jira Clone</span>
        <span className="mx-2">/</span>
        <span>Kanban Board</span>
      </div>

      {/* Header */}
      <h1 className="text-[28px] font-bold text-[#172B4D] mt-4">
        Kanban Board
      </h1>

      {/* Filters */}
      <div className="flex items-center gap-4 mt-8 mb-8">

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-3 text-[#5E6C84]"
          />

          <input
            type="text"
            placeholder="Search issues..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="
              w-[240px]
              h-10
              pl-10
              pr-3
              rounded
              border
              border-[#DFE1E6]
              bg-white
              outline-none
              focus:border-[#4C9AFF]
            "
          />
        </div>

        {/* Only My Issues */}
        <button
          className="
            px-3
            h-10
            rounded
            border
            border-[#DFE1E6]
            hover:bg-[#EBECF0]
          "
        >
          Only My Issues
        </button>

        {/* Recently Updated */}
        <button
          className="
            px-3
            h-10
            rounded
            border
            border-[#DFE1E6]
            hover:bg-[#EBECF0]
          "
        >
          Recently Updated
        </button>
      </div>

      {/* Columns */}
      <div className="mt-6 max-w-[1120px]">
    <Columns issues={filteredIssues} />
</div>
    </div>
  );
};

export default Kanban;