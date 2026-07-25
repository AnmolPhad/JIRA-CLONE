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
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Open Issues",
    value: 8,
    icon: CircleDot,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "In Progress",
    value: 7,
    icon: LoaderCircle,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Completed",
    value: 9,
    icon: CircleCheckBig,
    bg: "bg-green-100",
    color: "text-green-600",
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2 text-[#172B4D]">
                  {item.value}
                </h2>
              </div>

              <div className={`${item.bg} p-3 rounded-full`}>
                <Icon className={`${item.color}`} size={26} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;
