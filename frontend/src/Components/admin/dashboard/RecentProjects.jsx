import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RecentProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Jira Clone",
      key: "JIRA",
      lead: "Rahul Sharma",
      status: "Active",
      updated: "2 hrs ago",
    },
    {
      id: 2,
      name: "Hospital Management",
      key: "HMS",
      lead: "Amit Patil",
      status: "Active",
      updated: "Yesterday",
    },
    {
      id: 3,
      name: "Library Management",
      key: "LMS",
      lead: "Swapnil Patil",
      status: "Completed",
      updated: "3 days ago",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

        <div>
          <h2 className="text-xl font-semibold text-[#172B4D]">
            Recent Projects
          </h2>

          <p className="text-sm text-[#5E6C84] mt-1">
            Latest created projects
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/projects")}
          className="flex items-center gap-2 text-[#0052CC] font-medium hover:underline"
        >
          View All
          <MdArrowForward size={18} />
        </button>

      </div>

      {/* Table */}
      <table className="w-full">

        <thead className="bg-[#F4F5F7]">
          <tr className="text-left text-sm text-[#5E6C84]">

            <th className="px-6 py-4">Project</th>

            <th className="px-6 py-4">Lead</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Updated</th>

          </tr>
        </thead>

        <tbody>

          {projects.map((project) => (

            <tr
              key={project.id}
              className="border-t hover:bg-[#F8F9FB] transition"
            >

              {/* Project */}
              <td className="px-6 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-lg bg-[#0052CC] text-white flex items-center justify-center font-semibold">
                    {project.key}
                  </div>

                  <div>

                    <p className="font-semibold text-[#172B4D]">
                      {project.name}
                    </p>

                    <p className="text-sm text-[#5E6C84]">
                      {project.key}
                    </p>

                  </div>

                </div>

              </td>

              {/* Lead */}
              <td className="px-6 py-4 text-[#42526E]">
                {project.lead}
              </td>

              {/* Status */}
              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {project.status}
                </span>

              </td>

              {/* Updated */}
              <td className="px-6 py-4 text-sm text-[#5E6C84]">
                {project.updated}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default RecentProjects;