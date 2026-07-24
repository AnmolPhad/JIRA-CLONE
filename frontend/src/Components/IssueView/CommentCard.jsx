const CommentCard = ({ comment }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-[#FAFBFC]">

      <div className="flex justify-between items-center">

        <h3 className="font-semibold text-[#172B4D]">
          {comment.author}
        </h3>

        <span className="text-xs text-gray-500">
          {comment.createdAt}
        </span>

      </div>

      <p className="mt-3 text-[#5E6C84]">
        {comment.text}
      </p>

    </div>
  );
};

export default CommentCard;