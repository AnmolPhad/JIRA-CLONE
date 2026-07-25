import { FolderKanban, Users, User, CalendarDays } from "lucide-react";

function ProjectInfo() {
  const project = {
    name: "Mini Jira",
    lead: "Anmol Phad",
    members: 5,
    createdOn: "25 July 2026",
    description:
      "A Jira-inspired issue tracking system built using React, Spring Boot, and MySQL.",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">

      <div className="flex items-center gap-2 mb-5">
        <FolderKanban className="text-[#0052CC]" size={24} />
        <h2 className="text-xl font-semibold text-[#172B4D]">
          Project Information
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <FolderKanban size={20} className="text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Project Name</p>
              <p className="font-medium">{project.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User size={20} className="text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Project Lead</p>
              <p className="font-medium">{project.lead}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users size={20} className="text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Members</p>
              <p className="font-medium">{project.members}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays size={20} className="text-orange-600" />
            <div>
              <p className="text-sm text-gray-500">Created On</p>
              <p className="font-medium">{project.createdOn}</p>
            </div>
          </div>

        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">
            Description
          </p>

          <div className="bg-gray-50 border rounded-lg p-4 text-gray-700 leading-relaxed">
            {project.description}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectInfo;