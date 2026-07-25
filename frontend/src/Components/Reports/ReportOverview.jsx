const statusData = [
  {
    title: "Open",
    value: 8,
    percentage: 40,
    color: "bg-red-500",
  },
  {
    title: "In Progress",
    value: 7,
    percentage: 35,
    color: "bg-yellow-500",
  },
  {
    title: "Done",
    value: 9,
    percentage: 45,
    color: "bg-green-500",
  },
];

const priorityData = [
  {
    title: "High",
    value: 6,
    percentage: 30,
    color: "bg-red-500",
  },
  {
    title: "Medium",
    value: 12,
    percentage: 60,
    color: "bg-yellow-500",
  },
  {
    title: "Low",
    value: 6,
    percentage: 30,
    color: "bg-green-500",
  },
];

function ProgressSection({ title, data }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#172B4D] mb-6">
        {title}
      </h2>

      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {item.title}
              </span>

              <span className="text-sm text-gray-500">
                {item.value}
              </span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportOverview() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <ProgressSection
        title="Issue Status"
        data={statusData}
      />

      <ProgressSection
        title="Priority Distribution"
        data={priorityData}
      />
    </div>
  );
}

export default ReportOverview;