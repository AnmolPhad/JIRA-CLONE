import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const { issues } = useOutletContext();

  const backlog = issues.filter((issue) => issue.status === "BACKLOG").length;
  const development = issues.filter(
    (issue) => issue.status === "SELECTED FOR DEVELOPMENT",
  ).length;
  const progress = issues.filter(
    (issue) => issue.status === "IN PROGRESS",
  ).length;
  const done = issues.filter((issue) => issue.status === "DONE").length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        Project Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded shadow-sm border p-5">
          <h2 className="text-gray-500 text-sm">Total Issues</h2>
          <p className="text-3xl font-bold mt-2">{issues.length}</p>
        </div>

        <div className="bg-white rounded shadow-sm border p-5">
          <h2 className="text-gray-500 text-sm">Backlog</h2>
          <p className="text-3xl font-bold mt-2">{backlog}</p>
        </div>

        <div className="bg-white rounded shadow-sm border p-5">
          <h2 className="text-gray-500 text-sm">In Progress</h2>
          <p className="text-3xl font-bold mt-2">{progress}</p>
        </div>

        <div className="bg-white rounded shadow-sm border p-5">
          <h2 className="text-gray-500 text-sm">Completed</h2>
          <p className="text-3xl font-bold mt-2">{done}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
