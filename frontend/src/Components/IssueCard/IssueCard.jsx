const priorityColors = {
  LOW: "bg-blue-500",
  MEDIUM: "bg-yellow-500",
  HIGH: "bg-red-500",
};

const typeColors = {
  TASK: "bg-green-500",
  BUG: "bg-red-500",
  STORY: "bg-purple-500",
};

const IssueCard = ({ issue }) => {
  return (
 <div
  className="
    bg-white
    border
    border-[#DFE1E6]
    rounded
    p-3
    h-[132px]
    flex
    flex-col
    justify-between
    cursor-pointer
    hover:shadow-sm
    transition
  "
>
      {/* Issue Key */}
      <p className="text-[11px] text-[#5E6C84] font-semibold uppercase">
        {issue.key}
      </p>

      {/* Title */}
      <h3 className="mt-2 text-[15px] text-[#172B4D] font-medium leading-6">
        {issue.title}
      </h3>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-5">
        {/* Left */}
        <div className="flex items-center gap-2">
          {/* Type */}
          <span
            className={`w-3 h-3 rounded-full ${typeColors[issue.type]}`}
          ></span>

          {/* Priority */}
          <span
            className={`w-3 h-3 rounded-full ${priorityColors[issue.priority]}`}
          ></span>
        </div>

        {/* Avatar */}
        <div
          className="
            w-7
            h-7
            rounded-full
            bg-[#0052CC]
            text-white
            text-xs
            font-semibold
            flex
            items-center
            justify-center
          "
        >
          {issue.assignee}
        </div>
      </div>
    </div>
  );
};

export default IssueCard;