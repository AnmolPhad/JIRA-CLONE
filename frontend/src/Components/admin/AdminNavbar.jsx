import { MdSearch, MdNotificationsNone, MdAdd } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold text-[#172B4D]">
          Admin Dashboard
        </h1>
      </div>

      {/* Center */}
      <div className="relative w-[420px]">
        <MdSearch
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C84]"
        />

        <input
          type="text"
          placeholder="Search projects, users..."
          className="
            w-full
            h-11
            pl-12
            pr-4
            rounded-md
            border
            border-gray-300
            bg-[#FAFBFC]
            text-[#172B4D]
            placeholder:text-[#7A869A]
            focus:outline-none
            focus:border-[#0052CC]
            focus:ring-2
            focus:ring-[#4C9AFF]
          "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate("/admin/projects/create")}
          className="
            flex
            items-center
            gap-2
            bg-[#0052CC]
            hover:bg-[#0747A6]
            text-white
            px-5
            py-2.5
            rounded-md
            font-medium
            transition
          "
        >
          <MdAdd size={20} />
          Create Project
        </button>

        <button className="relative p-2 rounded-full hover:bg-[#F4F5F7] transition">
          <MdNotificationsNone size={25} className="text-[#42526E]" />

          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
