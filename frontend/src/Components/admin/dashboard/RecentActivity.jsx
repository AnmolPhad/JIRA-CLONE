import {
  MdAddCircle,
  MdPersonAdd,
  MdAssignmentTurnedIn,
  MdEdit,
} from "react-icons/md";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      action: "Created Project",
      user: "Admin",
      time: "10 min ago",
      icon: <MdAddCircle size={20} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      action: "Assigned Project Lead",
      user: "Admin",
      time: "30 min ago",
      icon: <MdAssignmentTurnedIn size={20} />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      action: "Created New User",
      user: "Admin",
      time: "1 hour ago",
      icon: <MdPersonAdd size={20} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      action: "Updated Project Status",
      user: "Rahul Sharma",
      time: "2 hours ago",
      icon: <MdEdit size={20} />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-[#172B4D]">
          Recent Activity
        </h2>

        <p className="text-sm text-[#5E6C84] mt-1">
          Latest administrative actions
        </p>
      </div>

      {/* Timeline */}
      <div className="p-6">

        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex gap-4 relative pb-8 last:pb-0"
          >

            {/* Timeline Line */}
            {index !== activities.length - 1 && (
              <div className="absolute left-5 top-12 w-[2px] h-full bg-gray-200"></div>
            )}

            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color} z-10`}
            >
              {activity.icon}
            </div>

            {/* Content */}
            <div className="flex-1">

              <h3 className="font-semibold text-[#172B4D]">
                {activity.action}
              </h3>

              <p className="text-sm text-[#5E6C84] mt-1">
                Performed by{" "}
                <span className="font-medium text-[#172B4D]">
                  {activity.user}
                </span>
              </p>

              <p className="text-xs text-[#7A869A] mt-2">
                {activity.time}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentActivity;