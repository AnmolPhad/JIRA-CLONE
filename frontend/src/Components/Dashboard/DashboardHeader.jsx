import { Link } from "react-router-dom";

function DashboardHeader() {
  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-start mb-8">

      <div>

        <h1 className="text-3xl font-bold text-[#172B4D]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Anmol 👋
        </p>

        <p className="text-sm text-gray-400 mt-1">
          {date}
        </p>

      </div>

 

    </div>
  );
}

export default DashboardHeader;