function Profile() {
  const user = {
    name: "Anmol Phad",
    email: "anmol@example.com",
    role: "Project Member",
    department: "Software Development",
    phone: "+91 9876543210",
    skills: ["React", "Java", "Spring Boot", "MySQL"],
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-lg border shadow-sm p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-4xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#172B4D]">
              {user.name}
            </h2>

            <p className="text-gray-600">{user.email}</p>

            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {user.role}
            </span>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 mt-10">

          <div>
            <label className="text-gray-500 text-sm">
              Department
            </label>

            <p className="mt-1 text-lg">
              {user.department}
            </p>
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Phone
            </label>

            <p className="mt-1 text-lg">
              {user.phone}
            </p>
          </div>

        </div>

        <div className="mt-10">

          <label className="text-gray-500 text-sm">
            Skills
          </label>

          <div className="flex flex-wrap gap-3 mt-3">

            {user.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#EBECF0] rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-10">

          <button className="bg-[#0052CC] hover:bg-[#0747A6] text-white px-6 py-2 rounded">
            Edit Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;