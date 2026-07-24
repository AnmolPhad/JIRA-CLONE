const IssueDescription = ({ issue, issues, setIssues }) => {

  const handleDescriptionChange = (e) => {
    const updatedIssues = issues.map((item) =>
      item.id === issue.id
        ? { ...item, description: e.target.value }
        : item
    );

    setIssues(updatedIssues);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Description
      </h2>

      <textarea
        rows={8}
        value={issue.description}
        onChange={handleDescriptionChange}
        placeholder="Write description..."
        className="w-full border rounded-md p-3 resize-none"
      />

    </div>
  );
};

export default IssueDescription;