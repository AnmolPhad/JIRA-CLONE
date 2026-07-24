import UserForm from "../../Components/admin/user/UserForm";

const CreateUser = () => {
  const handleCreate = (user) => {
    console.log("Created User:", user);

    // Backend API call will go here later
    alert("User Created Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        Create User
      </h1>

      <UserForm
        onSubmit={handleCreate}
        buttonText="Create User"
      />
    </div>
  );
};

export default CreateUser;