import {
  MdVisibility,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProjectTable = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <table className="w-full">

        {/* Table Header */}
        <thead className="bg-[#F4F5F7]">

          <tr className="text-left text-sm font-semibold text-[#5E6C84]">

            <th className="px-6 py-4">Project</th>

            <th className="px-6 py-4">Project Lead</th>

            <th className="px-6 py-4">Members</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {projects.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-16 text-center text-[#5E6C84]"
              >
                No projects found.
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr
                key={project.id}
                className="border-t border-gray-200 hover:bg-[#FAFBFC] transition"
              >
                {/* Project */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0052CC] font-bold text-white">
                      {project.key}
                    </div>

                    <div>

                      <h3 className="font-semibold text-[#172B4D]">
                        {project.name}
                      </h3>

                      <p className="text-sm text-[#5E6C84]">
                        {project.key}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Project Lead */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0052CC] font-semibold text-white">
                      {project.lead
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <span className="text-[#172B4D]">
                      {project.lead}
                    </span>

                  </div>

                </td>

                {/* Members */}
                <td className="px-6 py-5">

                  <span className="rounded-full bg-[#F4F5F7] px-3 py-1 text-sm text-[#42526E]">
                    {project.members} Members
                  </span>

                </td>

                {/* Status */}
                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>

                </td>

                {/* Actions */}
                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        navigate(`/admin/projects/${project.id}`)
                      }
                      className="rounded-md p-2 text-[#0052CC] hover:bg-blue-50 transition"
                      title="View Project"
                    >
                      <MdVisibility size={20} />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/admin/projects/edit/${project.id}`)
                      }
                      className="rounded-md p-2 text-amber-600 hover:bg-amber-50 transition"
                      title="Edit Project"
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="rounded-md p-2 text-red-600 hover:bg-red-50 transition"
                      title="Delete Project"
                    >
                      <MdDelete size={20} />
                    </button>

                  </div>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default ProjectTable;