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

  const menu = [
    {
      title: "Kanban Board",
      icon: <Kanban size={18} />,
      link: "/project",
    },
    {
      title: "Project Settings",
      icon: <Settings size={18} />,
      link: "/project/settings",
    },
    {
      title: "User Settings",
      icon: <User size={18} />,
      link: "/project/user-settings",
    },
  ];

  const others = [
    { title: "Releases", icon: <Releases size={18} /> },
    { title: "Issues & Filters", icon: <Search size={18} /> },
    { title: "Pages", icon: <Pages size={18} /> },
    { title: "Reports", icon: <Reports size={18} /> },
    { title: "Components", icon: <Components size={18} /> },
  ];

  return (
    <aside
      className="
      fixed
      left-16
      top-0
      h-screen
      w-[240px]
      bg-[#F4F5F7]
      border-r
      border-[#DFE1E6]
      overflow-y-auto
    "
    >
      {/* Project Header */}
      <div className="flex items-start px-4 py-6">
        <div className="w-10 h-10 bg-[#0052CC] rounded flex items-center justify-center text-white font-bold text-lg">
          J
        </div>

        <div className="ml-3">
          <div className="text-[16px] font-black text-[#42526E]">
            {name}
          </div>

          <div className="text-[14px] text-[#42526E]">
            {categoryMap[category]} project
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-2">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.link}
            end={item.link === "/project"}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-[15px] mb-1 transition
              ${
                isActive
                  ? "bg-[#EBECF0] text-[#0052CC] font-semibold"
                  : "text-[#42526E] hover:bg-[#EBECF0]"
              }`
            }
          >
            <span className="mr-4">{item.icon}</span>
            {item.title}
          </NavLink>
        ))}

        <div className="border-t border-[#DFE1E6] my-4" />

        {others.map((item) => (
          <div
            key={item.title}
            className="
            flex
            items-center
            px-3
            py-2
            text-[15px]
            text-[#42526E]
            cursor-pointer
            hover:bg-[#EBECF0]
            mb-1
          "
          >
            <span className="mr-4">{item.icon}</span>
            {item.title}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;