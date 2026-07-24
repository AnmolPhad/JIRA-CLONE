import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdSearch } from "react-icons/md";
import UserTable from "../../Components/admin/user/UserTable";

const Users = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Swapnil Patil",
      email: "swapnil@gmail.com",
      role: "Project Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Patil",
      email: "amit@gmail.com",
      role: "Developer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "Tester",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-[#172B4D]">
            Users
          </h1>

          <p className="mt-2 text-[#5E6C84]">
            Manage all users and their roles.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/users/create")}
          className="flex items-center gap-2 rounded-md bg-[#0052CC] px-5 py-2.5 font-medium text-white transition hover:bg-[#0747A6]"
        >
          <MdAdd size={20} />
          Create User
        </button>

      </div>

      {/* Toolbar */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:w-96">

            <MdSearch
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C84]"
            />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-md border border-gray-300 bg-[#FAFBFC] pl-11 pr-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            />

          </div>

          <div className="text-sm text-[#5E6C84]">
            Total Users :
            <span className="ml-2 font-semibold text-[#172B4D]">
              {filteredUsers.length}
            </span>
          </div>

        </div>

      </div>

      {/* Table */}
      <UserTable users={filteredUsers} />

    </div>
  );
};

export default Users;