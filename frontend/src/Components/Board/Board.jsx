import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import BoardFilters from "../Filters/BoardFilters";
import Kanban from "../KanBan/Kanban";

function Board() {
  const { issues, setIssues } = useOutletContext();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredIssues = [...issues]
    .filter((issue) => {
      const matchesSearch = issue.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        !statusFilter || issue.status === statusFilter;

      const matchesPriority =
        !priorityFilter || issue.priority === priorityFilter;

      const matchesType =
        !typeFilter || issue.type === typeFilter;

      const matchesAssignee =
        !assigneeFilter ||
        issue.assignee
          .toLowerCase()
          .includes(assigneeFilter.toLowerCase());

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesType &&
        matchesAssignee
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "TITLE_ASC":
          return a.title.localeCompare(b.title);

        case "TITLE_DESC":
          return b.title.localeCompare(a.title);

        case "PRIORITY_HIGH": {
          const priority = {
            HIGH: 3,
            MEDIUM: 2,
            LOW: 1,
          };
          return priority[b.priority] - priority[a.priority];
        }

        case "PRIORITY_LOW": {
          const priority = {
            HIGH: 3,
            MEDIUM: 2,
            LOW: 1,
          };
          return priority[a.priority] - priority[b.priority];
        }

        case "DUE_ASC":
          return (
            new Date(a.dueDate || "9999-12-31") -
            new Date(b.dueDate || "9999-12-31")
          );

        case "DUE_DESC":
          return (
            new Date(b.dueDate || "1970-01-01") -
            new Date(a.dueDate || "1970-01-01")
          );

        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("");
    setPriorityFilter("");
    setTypeFilter("");
    setAssigneeFilter("");
    setSortBy("");
  };

  return (
    <div className="w-full ">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-[#5E6C84] font-medium mb-2">
        <span>Projects</span>
        <span className="mx-2">/</span>
        <span>Jira Clone</span>
        <span className="mx-2">/</span>
        <span>Kanban Board</span>
      </div>

      {/* Page Title */}
      <h1 className="text-[36px] font-bold text-[#172B4D] mb-6">
        Kanban Board
      </h1>

      {/* Filters */}
      <BoardFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        assigneeFilter={assigneeFilter}
        setAssigneeFilter={setAssigneeFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        clearFilters={clearFilters}
      />

      {/* Kanban Board */}
      <Kanban
        issues={filteredIssues}
        setIssues={setIssues}
      />
    </div>
  );
}

export default Board;