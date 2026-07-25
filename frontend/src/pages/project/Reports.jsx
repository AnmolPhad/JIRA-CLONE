import { useOutletContext } from "react-router-dom";

function Reports() {
  const { issues } = useOutletContext();

  const backlog = issues.filter(
    issue => issue.status === "BACKLOG"
  ).length;

  const selected = issues.filter(
    issue => issue.status === "SELECTED FOR DEVELOPMENT"
  ).length;

  const progress = issues.filter(
    issue => issue.status === "IN PROGRESS"
  ).length;

  const done = issues.filter(
    issue => issue.status === "DONE"
  ).length;

  const high = issues.filter(
    issue => issue.priority === "HIGH"
  ).length;

  const medium = issues.filter(
    issue => issue.priority === "MEDIUM"
  ).length;

  const low = issues.filter(
    issue => issue.priority === "LOW"
  ).length;

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#172B4D] mb-8">
        Reports
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white border rounded-lg p-6">

          <h2 className="font-semibold text-xl mb-6">
            Issue Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Issues</span>
              <span>{issues.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Backlog</span>
              <span>{backlog}</span>
            </div>

            <div className="flex justify-between">
              <span>Selected for Development</span>
              <span>{selected}</span>
            </div>

            <div className="flex justify-between">
              <span>In Progress</span>
              <span>{progress}</span>
            </div>

            <div className="flex justify-between">
              <span>Done</span>
              <span>{done}</span>
            </div>

          </div>

        </div>

        <div className="bg-white border rounded-lg p-6">

          <h2 className="font-semibold text-xl mb-6">
            Priority Distribution
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>High</span>
              <span>{high}</span>
            </div>

            <div className="flex justify-between">
              <span>Medium</span>
              <span>{medium}</span>
            </div>

            <div className="flex justify-between">
              <span>Low</span>
              <span>{low}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;