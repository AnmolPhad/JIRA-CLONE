import {
  ClipboardList,
  CircleDot,
  LoaderCircle,
  CircleCheckBig,
} from "lucide-react";

const stats = [
  {
    title: "Total Issues",
    value: 24,
    icon: ClipboardList,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Open",
    value: 8,
    icon: CircleDot,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "In Progress",
    value: 7,
    icon: LoaderCircle,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    title: "Done",
    value: 9,
    icon: CircleCheckBig,
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

function ReportStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className={`${item.bg} p-3 rounded-full`}>
                <Icon
                  size={26}
                  className={item.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReportStats;