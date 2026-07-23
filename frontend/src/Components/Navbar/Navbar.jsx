import { useState } from "react";
import CreateIssue from "../CreateIssue/CreateIssue";

import Jira from "../../icons/Jira";
import Search from "../../icons/Search";
import Plus from "../../icons/Plus";

const Navbar = () => {
  const [active, setActive] = useState("search");
  const [showCreateIssue, setShowCreateIssue] = useState(false);

  const navItems = [
    {
      id: "search",
      icon: <Search size={20} className="text-white" />,
    },
    {
      id: "create",
      icon: <Plus size={20} className="text-white" />,
    },
  ];

  const handleNavClick = (id) => {
    setActive(id);

    if (id === "create") {
      setShowCreateIssue(true);
    }
  };

  return (
    <>
      <nav
        className="
          fixed
          top-0
          left-0
          w-16
          h-screen
          bg-[#0747A6]
          flex
          flex-col
          items-center
          z-50
        "
      >
        {/* Jira Logo */}
        <div className="flex items-center justify-center mt-6 mb-5">
          <Jira size={26} className="text-white" />
        </div>

        {/* Navigation */}
        <div className="flex flex-col w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative
                w-full
                h-12
                flex
                items-center
                justify-center
                transition-colors
                duration-150
                ${
                  active === item.id
                    ? "bg-[#0052CC]"
                    : "hover:bg-[#0052CC]"
                }
              `}
            >
              {active === item.id && (
                <div className="absolute left-0 top-0 h-full w-1 bg-white" />
              )}

              {item.icon}
            </button>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="flex-1" />
      </nav>

      {/* Create Issue Modal */}
      {showCreateIssue && (
        <CreateIssue
          onClose={() => {
            setShowCreateIssue(false);
            setActive("search");
          }}
        />
      )}
    </>
  );
};

export default Navbar;