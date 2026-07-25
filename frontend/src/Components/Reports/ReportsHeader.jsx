import { FileBarChart2 } from "lucide-react";

function ReportsHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <FileBarChart2 size={32} className="text-[#0052CC]" />

        <div>
          <h1 className="text-3xl font-bold text-[#172B4D]">
            Reports
          </h1>

          <p className="text-gray-500 mt-1">
            Track project progress and issue statistics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsHeader;