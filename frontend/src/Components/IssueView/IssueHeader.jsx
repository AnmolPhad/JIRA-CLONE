import { useNavigate } from "react-router-dom";

const IssueHeader = ({ issue, issues, setIssues }) => {
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const updatedIssues = issues.map((item) =>
      item.id === issue.id
        ? { ...item, title: e.target.value }
        : item
    );

    setIssues(updatedIssues);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/project")}
        className="text-blue-600 hover:underline text-sm mb-6"
      >
        ← Back to Board
      </button>

      {/* Issue Key */}
      <p className="text-sm text-gray-500 font-semibold mb-3">
        {issue.key}
      </p>

      {/* Editable Title */}
      <input
        type="text"
        value={issue.title}
        onChange={handleTitleChange}
        className="
          w-full
          text-3xl
          font-bold
          text-[#172B4D]
          border
          border-transparent
          focus:border-blue-500
          focus:outline-none
          rounded
          px-2
          py-1
        "
      />

    </div>
  );
};

export default IssueHeader;