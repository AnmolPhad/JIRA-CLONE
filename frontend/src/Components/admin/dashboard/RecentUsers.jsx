import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RecentUsers = () => {
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Project Lead",
      status: "Active",
    },
    {
      id: 2,
      name: "Swapnil Patil",
      role: "Employee",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Patil",
      role: "Employee",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

        <div>
          <h2 className="text-xl font-semibold text-[#172B4D]">
            Recent Users
          </h2>

          <p className="text-sm text-[#5E6C84] mt-1">
            Recently added users
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/users")}
          className="flex items-center gap-2 text-[#0052CC] font-medium hover:underline"
        >
          View All
          <MdArrowForward size={18} />
        </button>

      </div>

      {/* Users */}
      <div>

        {users.map((user) => (

          <div
            key={user.id}
            className="flex items-center justify-between px-6 py-4 border-b last:border-b-0 hover:bg-[#F8F9FB] transition"
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-semibold">
                {user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>

                <p className="font-semibold text-[#172B4D]">
                  {user.name}
                </p>

                <span className="inline-block mt-1 px-2 py-1 rounded-md bg-[#F4F5F7] text-xs text-[#42526E]">
                  {user.role}
                </span>

              </div>

            </div>

            {/* Status */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentUsers;