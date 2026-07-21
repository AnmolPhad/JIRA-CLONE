import { useState } from "react";

const ProjectSettings = () => {
  const [project, setProject] = useState({
    name: "",
    url: "",
    category: "SOFTWARE",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
<div className="max-w-3xl">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Projects <span className="mx-2">/</span>
        <span className="mx-2">/</span>
        <span className="text-blue-900 font-medium">Settings</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#172B4D] mb-4">
        Project Settings
      </h1>

      {/* Form */}

      <div className="space-y-7">
        {/* Name */}

        <div>
          <label className="block font-medium text-gray-700 mb-2">Name</label>

          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* URL */}

        <div>
          <label className="block font-medium text-gray-700 mb-2">URL</label>

          <input
            type="text"
            name="url"
            value={project.url}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Category */}

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            name="category"
            value={project.category}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="SOFTWARE">Software</option>
            <option value="BUSINESS">Business</option>
            <option value="MARKETING">Marketing</option>
          </select>
        </div>

        {/* Description */}

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            rows="4"
            placeholder="Issue Title"
            className="w-full border border-gray-300 rounded p-4 resize-none focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Buttons */}

        <div className="flex items-center gap-5 pt-2">
          <button className="bg-[#0052CC] hover:bg-[#0747A6] text-white px-3
           py-1 rounded">
            Save
          </button>

          <button className="text-gray-700 hover:text-black">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSettings;
