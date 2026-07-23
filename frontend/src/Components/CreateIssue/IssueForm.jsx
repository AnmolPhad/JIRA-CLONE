import { useState } from "react";

const IssueForm = ({ onClose }) => {
  const [form, setForm] = useState({
    type: "TASK",
    title: "",
    description: "",
    priority: "MEDIUM",
    assignee: "AP",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Backend / Context will be connected later

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Type */}
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-2 mt-8">
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
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2">
          Short Summary
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Issue summary..."
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="w-full border rounded px-3 py-2 resize-none"
        />
      </div>

      {/* Priority */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2">
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
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
          className="w-full border rounded px-3 py-2"
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
          Create
        </button>
      </div>
    </form>
  );
};

export default IssueForm;