const BoardFilters = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  assigneeFilter,
  setAssigneeFilter,
  sortBy,
  setSortBy,
  clearFilters,
}) => {
  const hasFilters =
    search ||
    statusFilter ||
    priorityFilter ||
    assigneeFilter ||
    sortBy;

  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-center gap-2">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-64
            h-9
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="
            w-32
            h-9
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="">Status</option>
          <option value="BACKLOG">Backlog</option>
          <option value="SELECTED FOR DEVELOPMENT">Selected</option>
          <option value="IN PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        {/* Priority */}
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="
            w-28
            h-9
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="">Priority</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        {/* Assignee */}
        <input
          type="text"
          placeholder="Assignee"
          value={assigneeFilter}
          onChange={(e) => setAssigneeFilter(e.target.value)}
          className="
            w-32
            h-9
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            w-32
            h-9
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="">Sort By</option>
          <option value="TITLE_ASC">Title (A-Z)</option>
          <option value="TITLE_DESC">Title (Z-A)</option>
          <option value="PRIORITY_HIGH">High → Low</option>
          <option value="PRIORITY_LOW">Low → High</option>
          <option value="DUE_ASC">Due ↑</option>
          <option value="DUE_DESC">Due ↓</option>
        </select>

        {/* Clear */}
        <button
          onClick={clearFilters}
          disabled={!hasFilters}
          className={`h-9 px-3 rounded-md text-sm font-medium transition ${
            hasFilters
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          🧹 Clear
        </button>

        {/* Only My Issues */}
        <button
          className="
            h-9
            px-3
            rounded-md
            border
            border-gray-300
            text-sm
            hover:bg-gray-100
            transition
          "
        >
          Only My Issues
        </button>

        {/* Recently Updated */}
        <button
          className="
          
            h-9
            px-3
            rounded-md
            border
            border-gray-300
            text-sm
            hover:bg-gray-100
            transition
          "
        >
          Updated
        </button>

      </div>
    </div>
  );
};

export default BoardFilters;