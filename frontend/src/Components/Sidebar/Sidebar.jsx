import { NavLink } from "react-router-dom";
import { sidebarMenus } from "../../config/sidebarMenus";

const Sidebar = ({
  name = "Jira Clone",
  category = "SOFTWARE",
  projectLogo = "J",
  // role = "PROJECT_LEAD",
  role = "PROJECT_MEMBER",
}) => {
  const categoryMap = {
    SOFTWARE: "Software",
    BUSINESS: "Business",
    MARKETING: "Marketing",
  };

  // Get menu according to role
  const { mainMenu, bottomMenu } =
    sidebarMenus[role] || sidebarMenus.PROJECT_MEMBER;

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
        flex
        flex-col
      "
    >
      {/* Project Header */}
      <div className="flex items-start px-4 py-6 flex-shrink-0">
        <div
          className="
            w-10
            h-10
            bg-[#0052CC]
            rounded
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-lg
          "
        >
          {projectLogo}
        </div>

        <div className="ml-3">
          <div className="text-[16px] font-black text-[#42526E]">
            {name}
          </div>

          <div className="text-[14px] text-[#42526E]">
            {categoryMap[category]} Project
          </div>
        </div>
      </div>

      {/* Main Navigation - Takes remaining space */}
      <div className="px-2 flex-1 overflow-y-auto">
        {mainMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.link}
              end={item.link === "/project"}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-[15px] mb-1 transition ${
                  isActive
                    ? "bg-[#EBECF0] text-[#0052CC] font-semibold"
                    : "text-[#42526E] hover:bg-[#EBECF0]"
                }`
              }
            >
              <span className="mr-4">
                <Icon size={18} />
              </span>
              {item.title}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Navigation - Fixed at bottom */}
      {bottomMenu.length > 0 && (
        <div className="px-2 pb-4 flex-shrink-0">
          <div className="border-t border-[#DFE1E6] my-4" />
          {bottomMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-[15px] mb-1 transition ${
                    isActive
                      ? "bg-[#EBECF0] text-[#0052CC] font-semibold"
                      : "text-[#42526E] hover:bg-[#EBECF0]"
                  }`
                }
              >
                <span className="mr-4">
                  <Icon size={18} />
                </span>
                {item.title}
              </NavLink>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;