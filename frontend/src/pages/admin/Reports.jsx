import {
  MdFolder,
  MdPeople,
  MdBugReport,
  MdCheckCircle,
  MdDownload,
  MdBarChart,
} from "react-icons/md";

const Reports = () => {
  const reports = [
    {
      title: "Total Projects",
      value: 12,
      color: "bg-[#0052CC]",
      icon: <MdFolder size={28} />,
    },
    {
      title: "Total Users",
      value: 85,
      color: "bg-[#36B37E]",
      icon: <MdPeople size={28} />,
    },
    {
      title: "Total Issues",
      value: 248,
      color: "bg-[#6554C0]",
      icon: <MdBugReport size={28} />,
    },
    {
      title: "Completed Issues",
      value: 180,
      color: "bg-[#00875A]",
      icon: <MdCheckCircle size={28} />,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-[#172B4D]">
            Reports
          </h1>

          <p className="mt-2 text-[#5E6C84]">
            Analyze projects, users and issue statistics across the organization.
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2.5 font-medium text-[#172B4D] hover:bg-[#F4F5F7] transition">
            <MdDownload size={20} />
            Export PDF
          </button>

          <button className="flex items-center gap-2 rounded-md bg-[#0052CC] px-5 py-2.5 font-medium text-white hover:bg-[#0747A6] transition">
            <MdDownload size={20} />
            Export Excel
          </button>

        </div>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {reports.map((report) => (

          <div
            key={report.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-[#5E6C84]">
                  {report.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#172B4D]">
                  {report.value}
                </h2>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${report.color}`}
              >
                {report.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-2">

            <MdBarChart size={24} className="text-[#0052CC]" />

            <h2 className="text-xl font-semibold text-[#172B4D]">
              Project Overview
            </h2>

          </div>

          <div className="mt-8 flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-[#FAFBFC]">

            <p className="text-[#5E6C84]">
              Chart Placeholder
            </p>

          </div>

        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-2">

            <MdBarChart size={24} className="text-[#0052CC]" />

            <h2 className="text-xl font-semibold text-[#172B4D]">
              Issue Analytics
            </h2>

          </div>

          <div className="mt-8 flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-[#FAFBFC]">

            <p className="text-[#5E6C84]">
              Chart Placeholder
            </p>

          </div>

        </div>

      </div>

      {/* Recent Report */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        <div className="border-b border-gray-200 px-6 py-5">

          <h2 className="text-xl font-semibold text-[#172B4D]">
            Report Summary
          </h2>

        </div>

        <div className="p-6">

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            <div>
              <p className="text-sm text-[#5E6C84]">Active Projects</p>
              <h3 className="mt-2 text-2xl font-bold text-[#172B4D]">9</h3>
            </div>

            <div>
              <p className="text-sm text-[#5E6C84]">Completed Projects</p>
              <h3 className="mt-2 text-2xl font-bold text-[#172B4D]">3</h3>
            </div>

            <div>
              <p className="text-sm text-[#5E6C84]">Resolved Issues</p>
              <h3 className="mt-2 text-2xl font-bold text-[#172B4D]">180</h3>
            </div>

            <div>
              <p className="text-sm text-[#5E6C84]">Pending Issues</p>
              <h3 className="mt-2 text-2xl font-bold text-[#172B4D]">68</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Reports;