import {
  MdVisibility,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <table className="w-full">

        {/* Header */}
        <thead className="bg-[#F4F5F7]">
          <tr className="text-left text-sm font-semibold text-[#5E6C84]">

            <th className="px-6 py-4">User</th>

            <th className="px-6 py-4">Role</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>
        </thead>

        {/* Body */}
        <tbody>

          {users.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="py-16 text-center text-[#5E6C84]"
              >
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-200 hover:bg-[#FAFBFC] transition"
              >

                {/* User */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0052CC] font-semibold text-white">
                      {user.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>

                      <h3 className="font-semibold text-[#172B4D]">
                        {user.name}
                      </h3>

                      <p className="text-sm text-[#5E6C84]">
                        {user.email}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Role */}
                <td className="px-6 py-5">

                  <span className="rounded-md bg-[#F4F5F7] px-3 py-1 text-sm text-[#42526E]">
                    {user.role}
                  </span>

                </td>

                {/* Status */}
                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                {/* Actions */}
                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        navigate(`/admin/users/${user.id}`)
                      }
                      className="rounded-md p-2 text-[#0052CC] hover:bg-blue-50 transition"
                      title="View User"
                    >
                      <MdVisibility size={20} />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/admin/users/edit/${user.id}`)
                      }
                      className="rounded-md p-2 text-amber-600 hover:bg-amber-50 transition"
                      title="Edit User"
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="rounded-md p-2 text-red-600 hover:bg-red-50 transition"
                      title="Delete User"
                    >
                      <MdDelete size={20} />
                    </button>

                  </div>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default UserTable;