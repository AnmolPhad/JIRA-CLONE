import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdSearch } from "react-icons/md";
import ProjectTable from "../../Components/admin/project/ProjectTable";

const Projects = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      name: "Jira Clone",
      key: "JIRA",
      lead: "Rahul Sharma",
      members: 8,
      status: "Active",
    },
    {
      id: 2,
      name: "Hospital Management",
      key: "HMS",
      lead: "Amit Patil",
      members: 6,
      status: "Active",
    },
    {
      id: 3,
      name: "Library Management",
      key: "LMS",
      lead: "Swapnil Patil",
      members: 5,
      status: "Completed",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.key.toLowerCase().includes(search.toLowerCase()) ||
      project.lead.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#172B4D]">
            Projects
          </h1>

          <p className="mt-2 text-[#5E6C84]">
            Manage all projects across your organization.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/projects/create")}
          className="flex items-center gap-2 rounded-md bg-[#0052CC] px-5 py-2.5 font-medium text-white transition hover:bg-[#0747A6]"
        >
          <MdAdd size={20} />
          Create Project
        </button>
      </div>

      {/* Toolbar */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:w-96">
            <MdSearch
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C84]"
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-md border border-gray-300 bg-[#FAFBFC] pl-11 pr-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            />
          </div>

          <div className="text-sm text-[#5E6C84]">
            Total Projects :
            <span className="ml-2 font-semibold text-[#172B4D]">
              {filteredProjects.length}
            </span>
          </div>
        </div>
      </div>

      {/* Project Table */}
      <ProjectTable projects={filteredProjects} />
    </div>
  );
};

export default Projects;