import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  CalendarDays,
  Pencil,
  Save,
  X,
  Lock,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";

function Profile() {
  const initialUser = {
    name: "Anmol Phad",
    email: "anmol@example.com",
    role: "Project Lead",
    joined: "25 July 2026",
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(user);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUser(initialUser);
    setIsEditing(false);
  };

  const handleUpdatePassword = () => {
    console.log("Password updated:", passwordData);
    setShowPasswordForm(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleCancelPassword = () => {
    setShowPasswordForm(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#172B4D]">My Profile</h1>
          <p className="text-gray-500 mt-1">
            View and manage your profile information.
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-[#0052CC] hover:bg-[#0747A6] text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Pencil size={18} />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Save size={18} />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg transition-colors"
            >
              <X size={18} />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-[#0052CC] flex items-center justify-center text-white">
              <User size={60} />
            </div>

            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-5 border rounded-lg px-3 py-2 w-full text-center focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
              />
            ) : (
              <>
                <h2 className="mt-5 text-2xl font-bold text-[#172B4D]">
                  {user.name}
                </h2>
                <p className="text-gray-500 mt-1">{user.role}</p>
              </>
            )}
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-[#0052CC] mt-1" size={20} />
                <div className="w-full">
                  <p className="text-sm text-gray-500">Email</p>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="mt-1 border rounded-lg px-3 py-2 w-full focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
                    />
                  ) : (
                    <p className="font-medium text-[#172B4D]">{user.email}</p>
                  )}
                </div>
              </div>

              {/* Role */}
              <div className="flex items-start gap-4">
                <Briefcase className="text-[#0052CC] mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium text-[#172B4D]">{user.role}</p>
                </div>
              </div>

              {/* Joined */}
              <div className="flex items-start gap-4">
                <CalendarDays className="text-[#0052CC] mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Joined On</p>
                  <p className="font-medium text-[#172B4D]">{user.joined}</p>
                </div>
              </div>
            </div>

            {/* Security Section - Horizontal Layout */}
            <div className="mt-10 border-t pt-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="text-[#0052CC]" size={22} />
                  <h3 className="text-lg font-semibold text-[#172B4D]">
                    Security Settings
                  </h3>
                </div>
                {!showPasswordForm && (
                  <button
                    onClick={() => setShowPasswordForm(true)}
                    className="flex items-center gap-2 bg-[#0052CC] hover:bg-[#0747A6] text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
                  >
                    <Lock size={18} />
                    Change Password
                  </button>
                )}
              </div>

              {showPasswordForm && (
                <div className="space-y-5">
                  {/* Horizontal Password Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Current Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          placeholder="Enter current password"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        New Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          placeholder="Enter new password"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                          placeholder="Confirm new password"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>

           

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleUpdatePassword}
                      className="flex items-center gap-2 bg-[#0052CC] hover:bg-[#0747A6] text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
                    >
                      Update Password
                    </button>
                    <button
                      onClick={handleCancelPassword}
                      className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;