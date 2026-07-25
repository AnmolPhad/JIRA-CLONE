import { useState } from "react";

const membersData = [
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

function Members() {
  // Change this to test different roles
//   const role = "PROJECT_LEAD";
  const role = "PROJECT_MEMBER";
  // const role = "TESTER";
  
  const [members, setMembers] = useState(membersData);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Project Member",
  });

  const handleRoleChange = (id, newRole) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, role: newRole } : member
      )
    );
  };

  const handleInputChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleInvite = () => {
    const newMemberWithId = {
      ...newMember,
      id: members.length + 1,
      status: "Active",
    };
    
    setMembers([...members, newMemberWithId]);
    console.log("New member added:", newMemberWithId);

    setNewMember({
      name: "",
      email: "",
      role: "Project Member",
    });
    setShowInviteForm(false);
  };

  // Check if user has admin/lead privileges
  const isProjectLead = role === "PROJECT_LEAD";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#172B4D]">
          Project Members
        </h1>

        {/* Only show Add Member button for PROJECT_LEAD */}
        {isProjectLead && (
          <button
            onClick={() => setShowInviteForm(true)}
            className="bg-[#0052CC] hover:bg-[#0747A6] text-white px-4 py-2 rounded transition-colors"
          >
            + Add Member
          </button>
        )}
      </div>

      {showInviteForm && isProjectLead && (
        <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-[#172B4D] mb-6">
            Invite Member
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={newMember.name}
                onChange={handleInputChange}
                placeholder="Enter member name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0052CC]/20 focus:border-[#0052CC] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={newMember.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0052CC]/20 focus:border-[#0052CC] outline-none transition-all"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Role
            </label>
            <select
              name="role"
              value={newMember.role}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0052CC]/20 focus:border-[#0052CC] outline-none transition-all"
            >
              <option>Project Member</option>
              <option>Tester</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => setShowInviteForm(false)}
              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleInvite}
              className="px-5 py-2 rounded-lg bg-[#0052CC] hover:bg-[#0747A6] text-white transition-colors"
            >
              Invite
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F4F5F7]">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-[#42526E]">
                Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-[#42526E]">
                Email
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-[#42526E]">
                Role
              </th>
              {/* Only show Actions column for PROJECT_LEAD */}
              {isProjectLead && (
                <th className="text-left px-6 py-4 text-sm font-semibold text-[#42526E]">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-[#172B4D]">
                  {member.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#42526E]">
                  {member.email}
                </td>
                <td className="px-6 py-4 text-sm text-[#42526E]">
                  {member.role}
                </td>
                {/* Only show Actions for PROJECT_LEAD */}
                {isProjectLead && (
                  <td className="px-6 py-4">
                    {member.role === "Project Lead" ? (
                      <span className="text-gray-400 text-sm">
                        —
                      </span>
                    ) : editingId === member.id ? (
                      <div className="flex items-center gap-2">
                        <select
                          value={member.role}
                          onChange={(e) =>
                            handleRoleChange(member.id, e.target.value)
                          }
                          className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-[#0052CC]/20 focus:border-[#0052CC] outline-none"
                        >
                          <option>Developer</option>
                          <option>Tester</option>
                          <option>Project Member</option>
                        </select>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-[#0052CC] text-sm font-medium hover:text-[#0747A6]"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingId(member.id)}
                        className="text-[#0052CC] hover:underline text-sm font-medium"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {members.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No members found. Add your first member!
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;