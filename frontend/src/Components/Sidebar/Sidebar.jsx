import { NavLink } from "react-router-dom";
import {
  Kanban,
  Settings,
  User,
  Releases,
  Search,
  Pages,
  Reports,
  Components,
} from "../../icons";

const Sidebar = ({
  name = "Jira Clone",
  category = "SOFTWARE",
}) => {
  const categoryMap = {
    SOFTWARE: "Software",
    BUSINESS: "Business",
    MARKETING: "Marketing",
  };

  return (
    <aside className="fixed left-[76px] top-0 h-screen w-[250px] bg-white border-r border-gray-200">

      {/* Project Info */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-200">
        <div className="w-12 h-12 rounded-md bg-[#0052CC] flex items-center justify-center text-white text-xl font-bold">
          J
        </div>

        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">
            {categoryMap[category]} Project
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">

        <NavLink
          to="/project"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Kanban size={20} />
          <span>Kanban Board</span>
        </NavLink>

        <NavLink
          to="/project/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Settings size={20} />
          <span>Project Settings</span>
        </NavLink>

        <NavLink
          to="/project/user-settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <User size={20} />
          <span>User Settings</span>
        </NavLink>

        <hr className="my-4 border-gray-200" />

        <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Releases size={20} />
          <span>Releases</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Search size={20} />
          <span>Issues & Filters</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Pages size={20} />
          <span>Pages</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Reports size={20} />
          <span>Reports</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Components size={20} />
          <span>Components</span>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;