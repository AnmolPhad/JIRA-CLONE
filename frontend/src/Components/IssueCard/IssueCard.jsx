import { Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const priorityColors = {
  LOW: "bg-blue-500",
  MEDIUM: "bg-yellow-500",
  HIGH: "bg-red-500",
};

const priorityText = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
};

const typeColors = {
  TASK: "bg-green-500",
  BUG: "bg-red-500",
  STORY: "bg-purple-500",
};

const IssueCard = ({ issue, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/issue/${issue.id}`);
  };

  // Copy Issue Key
  const handleCopyKey = async (e) => {
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(issue.key);
      toast.success("Issue key copied!");
    } catch (error) {
      toast.error("Failed to copy issue key.");
    }
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Check if due date is overdue
  const isOverdue = () => {
    if (!issue.dueDate) return false;

    const today = new Date();
    const dueDate = new Date(issue.dueDate);

    // Ignore time
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    return dueDate < today;
  };

  return (
    <Draggable
      draggableId={issue.id.toString()}
      index={index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleCardClick}
          className="
            bg-white
            border
            border-[#DFE1E6]
            rounded-lg
            p-4
            cursor-pointer
            hover:shadow-lg
            transition-all
            duration-200
          "
        >
          {/* Issue Key */}
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-[#5E6C84] uppercase">
              {issue.key}
            </p>

            <button
              onClick={handleCopyKey}
              title="Copy Issue Key"
              className="
                text-sm
                hover:scale-110
                transition-transform
              "
            >
              📋
            </button>
          </div>

          {/* Title */}
          <h3 className="mt-2 text-[15px] font-semibold text-[#172B4D] leading-6">
            {issue.title}
          </h3>

          {/* Labels */}
          {issue.labels && issue.labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {issue.labels.map((label) => (
                <span
                  key={label}
                  className="
                    px-2
                    py-1
                    text-[11px]
                    rounded-full
                    bg-[#DEEBFF]
                    text-[#0747A6]
                    font-medium
                  "
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Due Date */}
          {issue.dueDate && (
            <div
              className={`mt-3 text-xs font-medium ${
                isOverdue()
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {isOverdue() ? "🔴" : "🟢"} Due:{" "}
              {formatDate(issue.dueDate)}
              {isOverdue() && (
                <span className="font-semibold">
                  {" "}
                  (Overdue)
                </span>
              )}
            </div>
          )}

          {/* Bottom */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              {/* Type */}
              <div className="flex items-center gap-1">
                <span
                  className={`w-3 h-3 rounded-full ${typeColors[issue.type]}`}
                ></span>

                <span className="text-xs text-[#5E6C84]">
                  {issue.type}
                </span>
              </div>

              {/* Priority */}
              <span
                className={`
                  px-2
                  py-1
                  rounded-full
                  text-white
                  text-[10px]
                  font-semibold
                  ${priorityColors[issue.priority]}
                `}
              >
                {priorityText[issue.priority]}
              </span>
            </div>

            {/* Assignee */}
            <div
              className="
                w-8
                h-8
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
      )}
    </Draggable>
  );
};

export default IssueCard;