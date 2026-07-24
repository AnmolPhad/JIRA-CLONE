import { useState } from "react";
import {
  MdSearch,
  MdAddCircle,
  MdEdit,
  MdDelete,
  MdPersonAdd,
} from "react-icons/md";

const ActivityLogs = () => {
  const [search, setSearch] = useState("");

  const logs = [
    {
      id: 1,
      type: "create",
      action: "Project 'Jira Clone' created",
      user: "Admin",
      date: "24 Jul 2026, 10:30 AM",
    },
    {
      id: 2,
      type: "assign",
      action: "Rahul Sharma assigned as Project Lead",
      user: "Admin",
      date: "24 Jul 2026, 11:15 AM",
    },
    {
      id: 3,
      type: "user",
      action: "New user 'Swapnil Patil' added",
      user: "Admin",
      date: "24 Jul 2026, 12:00 PM",
    },
    {
      id: 4,
      type: "edit",
      action: "Hospital Management project updated",
      user: "Admin",
      date: "24 Jul 2026, 01:45 PM",
    },
    {
      id: 5,
      type: "delete",
      action: "Library Management project deleted",
      user: "Admin",
      date: "24 Jul 2026, 03:20 PM",
    },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.user.toLowerCase().includes(search.toLowerCase())
  );

  const getIcon = (type) => {
    switch (type) {
      case "create":
        return (
          <MdAddCircle
            className="text-green-600"
            size={22}
          />
        );
      case "edit":
        return (
          <MdEdit
            className="text-amber-500"
            size={22}
          />
        );
      case "delete":
        return (
          <MdDelete
            className="text-red-500"
            size={22}
          />
        );
      case "user":
      case "assign":
        return (
          <MdPersonAdd
            className="text-[#0052CC]"
            size={22}
          />
        );
      default:
        return (
          <MdAddCircle
            className="text-[#0052CC]"
            size={22}
          />
        );
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>

        <h1 className="text-3xl font-bold text-[#172B4D]">
          Activity Logs
        </h1>

        <p className="mt-2 text-[#5E6C84]">
          View all administrative activities and audit history.
        </p>

      </div>

      {/* Toolbar */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:w-96">

            <MdSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C84]"
              size={20}
            />

            <input
              type="text"
              placeholder="Search activity..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="h-11 w-full rounded-md border border-gray-300 bg-[#FAFBFC] pl-11 pr-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            />

          </div>

          <div className="text-sm text-[#5E6C84]">
            Total Activities :
            <span className="ml-2 font-semibold text-[#172B4D]">
              {filteredLogs.length}
            </span>
          </div>

        </div>

      </div>

      {/* Timeline */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        {filteredLogs.length === 0 ? (
          <div className="py-16 text-center text-[#5E6C84]">
            No activity found.
          </div>
        ) : (
          filteredLogs.map((log, index) => (
            <div
              key={log.id}
              className={`flex gap-5 p-6 hover:bg-[#FAFBFC] transition ${
                index !== filteredLogs.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >

              {/* Timeline Icon */}
              <div className="flex flex-col items-center">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F5F7]">
                  {getIcon(log.type)}
                </div>

                {index !== filteredLogs.length - 1 && (
                  <div className="mt-2 h-full w-px bg-gray-300" />
                )}

              </div>

              {/* Content */}
              <div className="flex-1">

                <h3 className="font-semibold text-[#172B4D]">
                  {log.action}
                </h3>

                <p className="mt-1 text-sm text-[#5E6C84]">
                  Performed by{" "}
                  <span className="font-medium">
                    {log.user}
                  </span>
                </p>

              </div>

              {/* Date */}
              <div className="text-right text-sm text-[#5E6C84] whitespace-nowrap">
                {log.date}
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default ActivityLogs;