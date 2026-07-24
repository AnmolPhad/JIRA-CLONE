import { useState } from "react";

const AddComment = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;

    onAddComment(comment);

    setComment("");
  };

  return (
    <div className="mt-6">

      <textarea
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full border rounded-lg p-3 resize-none"
      />

      <button
        onClick={handleSubmit}
        className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Add Comment
      </button>

    </div>
  );
};

export default AddComment;