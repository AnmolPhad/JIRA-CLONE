import { useState } from "react";
import {
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import IssueHeader from "./IssueHeader";
import IssueDescription from "./IssueDescription";
import IssueDetails from "./IssueDetails";
import IssueComments from "./IssueComments";
import DeleteIssueModal from "./DeleteIssueModal";

const IssueView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { issues, setIssues } = useOutletContext();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const issue = issues.find(
    (item) => item.id.toString() === id
  );

  if (!issue) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-red-500">
          Issue Not Found
        </h2>

        <button
          onClick={() => navigate("/project")}
          className="mt-5 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Board
        </button>
      </div>
    );
  }

  const handleDeleteIssue = () => {
    const updatedIssues = issues.filter(
      (item) => item.id !== issue.id
    );

    setIssues(updatedIssues);

    navigate("/project");
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] p-8">

      {/* Header */}
      <IssueHeader
        issue={issue}
        issues={issues}
        setIssues={setIssues}
      />

      {/* Delete Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowDeleteModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded transition"
        >
          Delete Issue
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8 mt-8">

        {/* Left Side */}
        <div className="col-span-2">

          <IssueDescription
            issue={issue}
            issues={issues}
            setIssues={setIssues}
          />

          <IssueComments
            issue={issue}
          />

        </div>

        {/* Right Side */}
        <div>

          <IssueDetails
            issue={issue}
            issues={issues}
            setIssues={setIssues}
          />

        </div>

      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteIssueModal
          onCancel={() => setShowDeleteModal(false)}
          onDelete={handleDeleteIssue}
        />
      )}

    </div>
  );
};

export default IssueView;