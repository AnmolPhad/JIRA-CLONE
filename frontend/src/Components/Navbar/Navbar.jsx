import { useState } from "react";
import Jira from "../../icons/Jira";
import Search from "../../icons/Search";
import Plus from "../../icons/Plus";

const Navbar = () => {
  const [active, setActive] = useState("search");

  return (
    <nav className="fixed left-0 top-0 h-screen w-[65px] bg-[#0747A6] flex flex-col items-center">
      {/* Logo */}
      <div className="mt-5 mb-10 cursor-pointer">
        <Jira size={34} className="text-white" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Search */}
        <button
          onClick={() => setActive("search")}
          className={`w-full h-14 flex justify-center items-center transition-all duration-200
            ${
              active === "search"
                ? "bg-blue-700 border-l-4 border-white"
                : "hover:bg-blue-700"
            }`}
        >
          <Search size={24} className="text-white" />
        </button>

        {/* Create Issue */}
        <button
          onClick={() => setActive("create")}
          className={`w-full h-14 flex justify-center items-center transition-all duration-200
            ${
              active === "create"
                ? "bg-blue-700 border-l-4 border-white"
                : "hover:bg-blue-700"
            }`}
        >
          <Plus size={24} className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
