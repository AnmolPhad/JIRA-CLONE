import { DragDropContext } from "@hello-pangea/dnd";
import Columns from "../Columns/Columns";

const Kanban = ({ issues, setIssues }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id.toString() === draggableId
          ? {
              ...issue,
              status: destination.droppableId,
            }
          : issue
      )
    );
  };

  return (
    <div>
      {/* Empty State */}
      {issues.length === 0 ? (
        <div
          className="
            mt-6
            bg-white
            border
            border-[#DFE1E6]
            rounded-lg
            p-16
            text-center
            shadow-sm
          "
        >
          <div className="text-6xl mb-4">📭</div>

          <h2 className="text-2xl font-bold text-[#172B4D]">
            No Issues Found
          </h2>

          <p className="mt-3 text-[#5E6C84]">
            No issues match your current search or filter criteria.
          </p>

          <p className="text-[#5E6C84] mt-1">
            Try changing the filters or create a new issue.
          </p>
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Columns issues={issues} />
        </DragDropContext>
      )}
    </div>
  );
};

export default Kanban;