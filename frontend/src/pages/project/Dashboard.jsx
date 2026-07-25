import DashboardHeader from "../../Components/Dashboard/DashboardHeader";
import StatsCards from "../../Components/Dashboard/StatsCards";
import ProjectInfo from "../../Components/Dashboard/ProjectInfo";

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <StatsCards />
      <ProjectInfo />
    </>
  );
}

export default Dashboard;