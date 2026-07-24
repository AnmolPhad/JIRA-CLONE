import UserForm from "../../Components/admin/user/UserForm";

const EditUser = () => {
  // Dummy user data (Later this will come from the backend)
  const user = {
    name: "Swapnil Patil",
    email: "swapnil@gmail.com",
    role: "Developer",
    status: "Active",
  };

  const handleUpdate = (updatedUser) => {
    console.log("Updated User:", updatedUser);

    // Backend API call will go here later
    alert("User Updated Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        Edit User
      </h1>

      <UserForm
        initialData={user}
        onSubmit={handleUpdate}
        buttonText="Update User"
      />
    </div>
  );
};

export default EditUser;