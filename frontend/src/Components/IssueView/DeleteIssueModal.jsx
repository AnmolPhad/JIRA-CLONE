import { toast } from "react-toastify";

const DeleteIssueModal = ({ onCancel, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    toast.success("Issue deleted successfully!");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[420px] p-6">
        <h2 className="text-2xl font-bold text-red-600">
          Delete Issue
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this issue?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onCancel}
            className="px-5 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteIssueModal;