import StatCard from "./StatCard";

const Dashboard = ({ issues }) => {
  const total = issues.length;

  const backlog = issues.filter(
    (issue) => issue.status === "BACKLOG"
  ).length;

  const selected = issues.filter(
    (issue) => issue.status === "SELECTED FOR DEVELOPMENT"
  ).length;

  const inProgress = issues.filter(
    (issue) => issue.status === "IN PROGRESS"
  ).length;

  const done = issues.filter(
    (issue) => issue.status === "DONE"
  ).length;

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        📊 Project Overview
      </h1>

      {/* Statistics */}
      <div className="grid grid-cols-5 gap-5">
        <StatCard
          title="Total Issues"
          value={total}
          color="border-blue-500"
        />

        <StatCard
          title="Backlog"
          value={backlog}
          color="border-gray-500"
        />

        <StatCard
          title="Selected"
          value={selected}
          color="border-yellow-500"
        />

        <StatCard
          title="In Progress"
          value={inProgress}
          color="border-orange-500"
        />

        <StatCard
          title="Done"
          value={done}
          color="border-green-500"
        />
      </div>
    </div>
  );
};

export default Dashboard;