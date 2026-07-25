const members = [
  {
    id: 1,
    name: "Anmol Phad",
    email: "anmol@example.com",
    role: "Project Lead",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Shah",
    email: "amit@example.com",
    role: "Tester",
    status: "Inactive",
  },
];
const role = "PROJECT_MEMBER";
// const
// role = "PROJECT_LEAD";
function Members() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#172B4D]">
          Project Members
        </h1>

     {role === "PROJECT_LEAD" && (
  <button className="bg-[#0052CC] hover:bg-[#0747A6] text-white px-4 py-2 rounded">
    + Add Member
  </button>
)}
      </div>

      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F4F5F7]">
            <tr>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{member.name}</td>

                <td className="px-6 py-4">{member.email}</td>

                <td className="px-6 py-4">{member.role}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members;