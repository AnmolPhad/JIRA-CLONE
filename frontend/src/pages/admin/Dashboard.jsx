import StatCard from "../../Components/admin/dashboard/StatCard";
import RecentProjects from "../../Components/admin/dashboard/RecentProjects";
import RecentUsers from "../../Components/admin/dashboard/RecentUsers";
import RecentActivity from "../../Components/admin/dashboard/RecentActivity";

const stats = [
  {
    title: "Projects",
    value: "12",
    color: "bg-[#0052CC]",
  },
  {
    title: "Users",
    value: "86",
    color: "bg-[#36B37E]",
  },
  {
    title: "Open Issues",
    value: "248",
    color: "bg-[#FFAB00]",
  },
  {
    title: "Resolved",
    value: "174",
    color: "bg-[#6554C0]",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#172B4D]">
          Dashboard
        </h1>

        <p className="mt-2 text-[#5E6C84]">
          Welcome back! Here's an overview of your Jira Clone administration.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      {/* Projects & Users */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentProjects />
        </div>

        <div>
          <RecentUsers />
        </div>
      </div>

      {/* Activity */}
      <RecentActivity />
    </div>
  );
};

export default Dashboard;