const ProjectDetails = () => {
  const project = {
    name: "Jira Clone",
    key: "JIRA",
    description: "Issue Tracking System",
    lead: "Rahul Sharma",
    members: 8,
    status: "Active",
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Project Details
      </h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <strong>Project Name:</strong> {project.name}
        </div>

        <div>
          <strong>Project Key:</strong> {project.key}
        </div>

        <div>
          <strong>Description:</strong> {project.description}
        </div>

        <div>
          <strong>Project Lead:</strong> {project.lead}
        </div>

        <div>
          <strong>Members:</strong> {project.members}
        </div>

        <div>
          <strong>Status:</strong> {project.status}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;