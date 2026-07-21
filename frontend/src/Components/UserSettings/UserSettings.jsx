import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSettings = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setUser((prev) => ({
        ...prev,
        image: e.target.files[0],
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="flex items-center text-[14px] font-semibold text-[#5E6C84] mb-4">
        <span>Projects</span>
        <span className="mx-2">/</span>
        <span className="text-[#172B4D]">User Settings</span>
      </div>

      {/* Heading */}
      <h1 className="text-[24px] font-extrabold text-[#172B4D] mb-7">
        User Settings
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-[620px]">

        {/* Name */}
        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-4
              py-3
              text-[14px]
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          />
        </div>

        {/* User Image */}
        <div className="mb-8">
          <label className="block text-[14px] font-semibold text-[#5E6C84] mb-2">
            User Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="
              w-full
              rounded
              border
              border-[#DFE1E6]
              px-3
              py-2
              text-[14px]
              bg-white
              hover:bg-[#F4F5F7]
              focus:bg-white
              focus:border-[#4C9AFF]
              focus:ring-1
              focus:ring-[#4C9AFF]
              outline-none
            "
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="
              h-8
              px-3
              rounded
              bg-[#0052CC]
              text-white
              text-[14px]
              hover:bg-[#0065FF]
            "
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => navigate("/project")}
            className="
              h-8
              px-3
              rounded
              text-[14px]
              text-[#42526E]
              hover:bg-[#EBECF0]
            "
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default UserSettings;