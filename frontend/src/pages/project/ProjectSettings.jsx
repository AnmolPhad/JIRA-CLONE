import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectSettings = () => {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "Jira Clone",
    url: "https://jiralite.com",
    category: "SOFTWARE",
    description: "",
  });

  const handleChange = (e) => {
    setProject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="flex items-center text-[14px] font-semibold text-[#5E6C84] mb-4">
        <span>Projects</span>
        <span className="mx-2">/</span>
        <span>Jira Clone</span>
        <span className="mx-2">/</span>
        <span className="text-[#172B4D]">Settings</span>
      </div>

      {/* Title */}
      <h1 className="text-[24px] font-extrabold text-[#172B4D] mb-7">
        Project Settings
      </h1>

      {/* Form */}
      <div className="max-w-[620px]">

        {/* Name */}
        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-4
              py-3
              text-[14px]
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          />
        </div>

        {/* URL */}
        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            URL
          </label>

          <input
            type="text"
            name="url"
            value={project.url}
            onChange={handleChange}
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-4
              py-3
              text-[14px]
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            Category
          </label>

          <select
            name="category"
            value={project.category}
            onChange={handleChange}
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-4
              py-3
              text-[14px]
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          >
            <option value="SOFTWARE">Software</option>
            <option value="BUSINESS">Business</option>
            <option value="MARKETING">Marketing</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Issue Title"
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-4
              py-3
              text-[14px]
              resize-none
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="
              h-8
              px-3
              rounded
              bg-[#0052CC]
              text-white
              text-[14px]
              hover:bg-[#0065FF]
            "
          >
            Save
          </button>

          <button
            onClick={() => navigate("/project")}
            className="
              h-8
              px-3
              rounded
              text-[14px]
              text-[#42526E]
              hover:bg-[#EBECF0]
            "
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectSettings;