import { useState } from "react";
import { toast } from "react-toastify";
import ReporterSelect from "./ReporterSelect";

const IssueForm = ({ onClose, issues, setIssues }) => {
  const [form, setForm] = useState({
    type: "TASK",
    title: "",
    description: "",
    priority: "MEDIUM",
    reporter: "1",
    assignee: "AP",
    labels: [],
    dueDate: "",
  });

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLabelChange = (label) => {
    if (form.labels.includes(label)) {
      setForm({
        ...form,
        labels: form.labels.filter((item) => item !== label),
      });
    } else {
      setForm({
        ...form,
        labels: [...form.labels, label],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.title.trim()) {
      toast.error("Please enter issue summary!");
      return;
    }

    // Generate ID
    const newId =
      issues.length > 0
        ? Math.max(...issues.map((issue) => issue.id)) + 1
        : 1;

    // Generate Key
    const newKey = `JIRA-${newId}`;

    // Create New Issue
    const newIssue = {
      id: newId,
      key: newKey,
      title: form.title,
      description: form.description,
      type: form.type,
      priority: form.priority,
      reporter: form.reporter,
      assignee: form.assignee,
      status: "BACKLOG",
      labels: form.labels,
      dueDate: form.dueDate,
    };

    // Add Issue
    setIssues((prev) => [...prev, newIssue]);

    // Success Toast
    toast.success("Issue created successfully!");

    // Close Modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Issue Type */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Issue Type
        </label>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="TASK">Task</option>
          <option value="BUG">Bug</option>
          <option value="STORY">Story</option>
        </select>
      </div>

      {/* Summary */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Short Summary
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Issue summary..."
          className="w-full h-11 border border-[#DFE1E6] rounded px-4 text-[15px] focus:outline-none focus:border-[#4C9AFF]"
        />
      </div>

      {/* Priority */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full h-11 border border-[#DFE1E6] rounded px-4 text-[15px] focus:outline-none focus:border-[#4C9AFF]"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="4"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="w-full min-h-[120px] border border-[#DFE1E6] rounded px-4 py-3 resize-none text-[15px] focus:outline-none focus:border-[#4C9AFF]"
        />
      </div>

      {/* Labels */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Labels
        </label>

        <div className="grid grid-cols-3 gap-2">
          {labelOptions.map((label) => (
            <label
              key={label}
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                checked={form.labels.includes(label)}
                onChange={() => handleLabelChange(label)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Due Date */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Due Date
        </label>

        <input
          type="date"
          value={form.dueDate}
          onChange={(e) =>
            setForm({
              ...form,
              dueDate: e.target.value,
            })
          }
          className="w-full h-11 border border-[#DFE1E6] rounded px-4"
        />
      </div>

      {/* Reporter */}
      <div className="mb-3">
        <label className="block text-sm font-semibold mb-2">
          Reporter
        </label>

        <ReporterSelect
          value={form.reporter}
          onChange={(value) =>
            setForm({
              ...form,
              reporter: value,
            })
          }
        />
      </div>

      {/* Assignee */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          Assignee
        </label>

        <select
          name="assignee"
          value={form.assignee}
          onChange={handleChange}
          className="w-full h-11 border border-[#DFE1E6] rounded px-4 text-[15px] focus:outline-none focus:border-[#4C9AFF]"
        >
          <option value="AP">Anmol</option>
          <option value="RK">Rahul</option>
          <option value="AS">Amit</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-5 py-2 rounded bg-[#0052CC] text-white hover:bg-[#0747A6]"
        >
          Create Issue
        </button>
      </div>
    </form>
  );
};

export default IssueForm;