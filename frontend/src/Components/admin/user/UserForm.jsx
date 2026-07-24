import { useState } from "react";

const UserForm = ({
  initialData = {},
  onSubmit,
  buttonText = "Save User",
}) => {
  const [user, setUser] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    role: initialData.role || "Developer",
    status: initialData.status || "Active",
    department: initialData.department || "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(user);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-6">

        <h2 className="text-2xl font-semibold text-[#172B4D]">
          User Details
        </h2>

        <p className="mt-1 text-sm text-[#5E6C84]">
          Create or update a user account and assign permissions.
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8"
      >

        {/* Avatar */}
        <div className="flex justify-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0052CC] text-3xl font-bold text-white">
            {user.name
              ? user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              : "U"}
          </div>

        </div>

        {/* Name */}
        <div>

          <label className="mb-2 block font-medium text-[#172B4D]">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          />

        </div>

        {/* Email */}
        <div>

          <label className="mb-2 block font-medium text-[#172B4D]">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          />

        </div>

        {/* Role & Department */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium text-[#172B4D]">
              Role
            </label>

            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            >
              <option>Admin</option>
              <option>Project Manager</option>
              <option>Developer</option>
              <option>Tester</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block font-medium text-[#172B4D]">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={user.department}
              onChange={handleChange}
              placeholder="Example: Engineering"
              className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            />

          </div>

        </div>

        {/* Status */}
        <div>

          <label className="mb-2 block font-medium text-[#172B4D]">
            Status
          </label>

          <select
            name="status"
            value={user.status}
            onChange={handleChange}
            className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 border-t border-gray-200 pt-6">

          <button
            type="button"
            className="rounded-md border border-gray-300 px-6 py-2.5 font-medium text-[#42526E] transition hover:bg-[#F4F5F7]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-[#0052CC] px-6 py-2.5 font-medium text-white transition hover:bg-[#0747A6]"
          >
            {buttonText}
          </button>

        </div>

      </form>

    </div>
  );
};

export default UserForm;