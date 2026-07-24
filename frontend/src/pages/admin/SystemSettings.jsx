import { useState } from "react";
import {
  MdBusiness,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSettings,
  MdSave,
} from "react-icons/md";

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    companyName: "ABC Technologies",
    companyEmail: "admin@abctech.com",
    companyPhone: "+91 9876543210",
    companyAddress: "Pune, Maharashtra",
    defaultStatus: "Active",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(settings);
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-3xl font-bold text-[#172B4D]">
          System Settings
        </h1>

        <p className="mt-2 text-[#5E6C84]">
          Configure organization information and default application settings.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        {/* Company Information */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-5">

            <MdBusiness
              size={24}
              className="text-[#0052CC]"
            />

            <h2 className="text-xl font-semibold text-[#172B4D]">
              Company Information
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-[#172B4D]">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#172B4D]">
                Company Email
              </label>

              <div className="relative">

                <MdEmail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6C84]"
                  size={20}
                />

                <input
                  type="email"
                  name="companyEmail"
                  value={settings.companyEmail}
                  onChange={handleChange}
                  className="h-11 w-full rounded-md border border-gray-300 pl-10 pr-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
                />

              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#172B4D]">
                Company Phone
              </label>

              <div className="relative">

                <MdPhone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6C84]"
                  size={20}
                />

                <input
                  type="text"
                  name="companyPhone"
                  value={settings.companyPhone}
                  onChange={handleChange}
                  className="h-11 w-full rounded-md border border-gray-300 pl-10 pr-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
                />

              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#172B4D]">
                Default Project Status
              </label>

              <select
                name="defaultStatus"
                value={settings.defaultStatus}
                onChange={handleChange}
                className="h-11 w-full rounded-md border border-gray-300 px-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>

        </div>

        {/* Address */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-5">

            <MdLocationOn
              size={24}
              className="text-[#0052CC]"
            />

            <h2 className="text-xl font-semibold text-[#172B4D]">
              Company Address
            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={5}
              name="companyAddress"
              value={settings.companyAddress}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-4 focus:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]"
            />

          </div>

        </div>

        {/* Application Settings */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-5">

            <MdSettings
              size={24}
              className="text-[#0052CC]"
            />

            <h2 className="text-xl font-semibold text-[#172B4D]">
              Application Settings
            </h2>

          </div>

          <div className="space-y-4 p-6">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-medium text-[#172B4D]">
                  Email Notifications
                </h3>

                <p className="text-sm text-[#5E6C84]">
                  Send email notifications for important updates.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 accent-[#0052CC]"
              />

            </div>

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-medium text-[#172B4D]">
                  Maintenance Mode
                </h3>

                <p className="text-sm text-[#5E6C84]">
                  Temporarily restrict user access during maintenance.
                </p>
              </div>

              <input
                type="checkbox"
                className="h-5 w-5 accent-[#0052CC]"
              />

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end">

          <button
            type="submit"
            className="flex items-center gap-2 rounded-md bg-[#0052CC] px-6 py-3 font-medium text-white transition hover:bg-[#0747A6]"
          >
            <MdSave size={20} />
            Save Settings
          </button>

        </div>

      </form>

    </div>
  );
};

export default SystemSettings;