import { useState } from "react";

import commentsData from "../../Data/comments";

import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const IssueComments = ({ issue }) => {
  const [comments, setComments] = useState(
    commentsData.filter(
      (comment) => comment.issueId === issue.id
    )
  );

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      issueId: issue.id,
      author: "You",
      text,
      createdAt: "Just now",
    };

    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">

      <h2 className="text-xl font-semibold mb-6">
        Comments
      </h2>

      {comments.length === 0 ? (
        <p className="text-gray-500">
          No comments yet.
        </p>
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
          />
        ))
      )}

      <AddComment onAddComment={handleAddComment} />

    </div>
  );
};

export default IssueComments;