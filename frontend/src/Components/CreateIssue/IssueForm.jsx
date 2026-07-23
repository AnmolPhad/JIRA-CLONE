import { useState } from "react";
import ReporterSelect from "./ReporterSelect";
const IssueForm = ({ onClose }) => {
const [form, setForm] = useState({
  type: "TASK",
  title: "",
  description: "",
  priority: "MEDIUM",
  reporter: "1",
  assignee: "",
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
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-2">
          Short Summary
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Issue summary..."
          className="
w-full
h-11
border
border-[#DFE1E6]
rounded
px-4
text-[15px]
focus:outline-none
focus:border-[#4C9AFF]
"
        />
      </div>

  {/* Priority */}
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-2">
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="
w-full
h-11
border
border-[#DFE1E6]
rounded
px-4
text-[15px]
focus:outline-none
focus:border-[#4C9AFF]
"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="4"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="
w-full
min-h-[120px]
border
border-[#DFE1E6]
rounded
px-4
py-3
resize-none
text-[15px]
focus:outline-none
focus:border-[#4C9AFF]
"
        />
      </div>

    

<div className="mb-2">
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
         className="
w-full
h-11
border
border-[#DFE1E6]
rounded
px-4
text-[15px]
focus:outline-none
focus:border-[#4C9AFF]
"
        >
          <option value="AP">Anmol</option>
          <option value="RK">Rahul</option>
          <option value="AS">Amit</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 ">
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