const UserDetails = () => {
  const user = {
    id: 1,
    name: "Swapnil Patil",
    email: "swapnil@gmail.com",
    role: "Employee",
    status: "Active",
    project: "Jira Clone",
    phone: "+91 9876543210",
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-8">
        User Details
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-500">Full Name</p>
          <h3 className="font-semibold text-lg">{user.name}</h3>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h3 className="font-semibold text-lg">{user.email}</h3>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <h3 className="font-semibold text-lg">{user.phone}</h3>
        </div>

        <div>
          <p className="text-gray-500">Role</p>
          <h3 className="font-semibold text-lg">{user.role}</h3>
        </div>

        <div>
          <p className="text-gray-500">Assigned Project</p>
          <h3 className="font-semibold text-lg">{user.project}</h3>
        </div>

        <div>
          <p className="text-gray-500">Status</p>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            {user.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;