import ProjectForm from "../../Components/admin/project/ProjectForm";

const CreateProject = () => {
  const handleCreate = (project) => {
    console.log("Project Created:", project);

    // Backend API call will go here later
    alert("Project Created Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        Create Project
      </h1>

      <ProjectForm
        onSubmit={handleCreate}
        buttonText="Create Project"
      />
    </div>
  );
};

export default CreateProject;