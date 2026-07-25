import ReportsHeader from "../../Components/Reports/ReportsHeader";
import ReportStats from "../../Components/Reports/ReportStats";
import ReportOverview from "../../Components/Reports/ReportOverview";

function Reports() {
  return (
    <div className="space-y-8">
      <ReportsHeader />

      <ReportStats />

      <ReportOverview />
    </div>
  );
}

export default Reports;