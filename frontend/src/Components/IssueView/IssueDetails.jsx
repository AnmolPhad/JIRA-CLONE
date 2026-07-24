import React from "react";

const labelOptions = [
  "Frontend",
  "Backend",
  "UI",
  "Bug",
  "Feature",
  "Testing",
  "Documentation",
  "API",
  "Urgent",
];

const IssueDetails = ({ issue, issues, setIssues }) => {
  const handleChange = (field, value) => {
    const updatedIssues = issues.map((item) =>
      item.id === issue.id
        ? { ...item, [field]: value }
        : item
    );

    setIssues(updatedIssues);
  };

  const handleLabelChange = (label) => {
    const labels = issue.labels || [];

    const updatedLabels = labels.includes(label)
      ? labels.filter((item) => item !== label)
      : [...labels, label];

    handleChange("labels", updatedLabels);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Details
      </h2>

      {/* Status */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Status
        </label>

        <select
          value={issue.status}
          onChange={(e) =>
            handleChange("status", e.target.value)
          }
          className="w-full border rounded-md p-2"
        >
          <option>BACKLOG</option>
          <option>SELECTED FOR DEVELOPMENT</option>
          <option>IN PROGRESS</option>
          <option>DONE</option>
        </select>
      </div>

      {/* Priority */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Priority
        </label>

        <select
          value={issue.priority}
          onChange={(e) =>
            handleChange("priority", e.target.value)
          }
          className="w-full border rounded-md p-2"
        >
          <option>LOW</option>
          <option>MEDIUM</option>
          <option>HIGH</option>
        </select>
      </div>

      {/* Type */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Type
        </label>

        <input
          value={issue.type}
          readOnly
          className="w-full border rounded-md p-2 bg-gray-100"
        />
      </div>

      {/* Reporter */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Reporter
        </label>

        <input
          value={issue.reporter}
          readOnly
          className="w-full border rounded-md p-2 bg-gray-100"
        />
      </div>

      {/* Assignee */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Assignee
        </label>

        <input
          value={issue.assignee}
          onChange={(e) =>
            handleChange("assignee", e.target.value)
          }
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Labels */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Labels
        </label>

        <div className="grid grid-cols-2 gap-2">
          {labelOptions.map((label) => (
            <label
              key={label}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={(issue.labels || []).includes(label)}
                onChange={() => handleLabelChange(label)}
              />

              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Due Date */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2">
          Due Date
        </label>

        <input
          type="date"
          value={issue.dueDate || ""}
          onChange={(e) =>
            handleChange("dueDate", e.target.value)
          }
          className="w-full border rounded-md p-2"
        />
      </div>

    </div>
  );
};

export default IssueDetails;