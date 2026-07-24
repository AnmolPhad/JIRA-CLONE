import ProjectForm from "../../Components/admin/project/ProjectForm";

const EditProject = () => {
  // Dummy project data (Later this will come from the backend)
  const project = {
    name: "Jira Clone",
    key: "JIRA",
    description: "Issue Tracking System",
    lead: "Rahul Sharma",
    status: "Active",
  };

  const handleUpdate = (updatedProject) => {
    console.log("Updated Project:", updatedProject);

    // Backend API call will go here later
    alert("Project Updated Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#172B4D] mb-6">
        Edit Project
      </h1>

      <ProjectForm
        initialData={project}
        onSubmit={handleUpdate}
        buttonText="Update Project"
      />
    </div>
  );
};

export default EditProject;