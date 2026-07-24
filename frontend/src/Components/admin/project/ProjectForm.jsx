import { useState } from "react";

const ProjectForm = ({
  initialData = {},
  onSubmit,
  buttonText = "Save Project",
}) => {
  const [project, setProject] = useState({
    name: initialData.name || "",
    key: initialData.key || "",
    description: initialData.description || "",
    lead: initialData.lead || "",
    status: initialData.status || "Active",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(project);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-6">
        <h2 className="text-2xl font-semibold text-[#172B4D]">
          Project Details
        </h2>

        <p className="mt-1 text-sm text-[#5E6C84]">
          Fill in the information below to create or update a project.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8"
      >

        {/* Project Name */}
        <div>
          <label className="mb-2 block font-medium text-[#172B4D]">
            Project Name
          </label>

          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
            className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          />
        </div>

        {/* Project Key */}
        <div>
          <label className="mb-2 block font-medium text-[#172B4D]">
            Project Key
          </label>

          <input
            type="text"
            name="key"
            value={project.key}
            onChange={handleChange}
            placeholder="Example: JIRA"
            required
            className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 uppercase focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block font-medium text-[#172B4D]">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Enter project description"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          />
        </div>

        {/* Lead + Status */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Project Lead */}
          <div>
            <label className="mb-2 block font-medium text-[#172B4D]">
              Project Lead
            </label>

            <select
              name="lead"
              value={project.lead}
              onChange={handleChange}
              className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            >
              <option value="">Select Project Lead</option>
              <option>Rahul Sharma</option>
              <option>Amit Patil</option>
              <option>Swapnil Patil</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block font-medium text-[#172B4D]">
              Status
            </label>

            <select
              name="status"
              value={project.status}
              onChange={handleChange}
              className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Completed</option>
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">

          <button
            type="button"
            className="rounded-md border border-gray-300 px-6 py-2.5 font-medium text-[#42526E] transition hover:bg-[#F4F5F7]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-[#0052CC] px-6 py-2.5 font-medium text-white transition hover:bg-[#0747A6]"
          >
            {buttonText}
          </button>

        </div>

      </form>
    </div>
  );
};

export default ProjectForm;