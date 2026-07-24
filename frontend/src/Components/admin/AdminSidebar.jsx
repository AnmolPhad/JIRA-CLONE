import {
  MdDashboard,
  MdFolder,
  MdPeople,
  MdAssessment,
  MdHistory,
  MdSettings,
} from "react-icons/md";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: <MdFolder size={22} />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <MdPeople size={22} />,
  },
  {
    name: "Reports",
    path: "/admin/reports",
    icon: <MdAssessment size={22} />,
  },
  {
    name: "Activity Logs",
    path: "/admin/activity-logs",
    icon: <MdHistory size={22} />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <MdSettings size={22} />,
  },
];

const AdminSidebar = () => {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="px-7 py-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-[#172B4D]">
          Jira Clone
        </h1>

        <p className="text-sm text-[#5E6C84] mt-1">
          Administration
        </p>
      </div>

      {/* Menu */}
      <nav className="mt-5 flex-1">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mx-3 mb-2 flex items-center gap-4 rounded-lg px-5 py-3 font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-[#DEEBFF] text-[#0052CC] border-l-4 border-[#0052CC]"
                  : "text-[#42526E] hover:bg-[#F4F5F7]"
              }`
            }
          >
            {item.icon}

            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-5">
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold text-[#172B4D]">
              Admin
            </p>

            <p className="text-xs text-[#5E6C84]">
              System Administrator
            </p>
          </div>

        </div>
      </div>

    </aside>
  );
};

export default AdminSidebar;