import IssueCard from "../IssueCard/IssueCard";

const columns = [
  { id: "BACKLOG", title: "BACKLOG" },
  { id: "SELECTED FOR DEVELOPMENT", title: "SELECTED FOR DEVELOPMENT" },
  { id: "IN PROGRESS", title: "IN PROGRESS" },
  { id: "DONE", title: "DONE" },
];

const Columns = ({ issues }) => {
  return (
   <div
  className="
    flex
    items-start
    gap-4
    mt-6
    
  "
>
      {columns.map((column) => {
        const columnIssues = issues.filter(
          (issue) => issue.status === column.id
        );

        return (
          <div
            key={column.id}
            className="w-[280px] flex-shrink-0"
          >
            {/* Header */}
            <div className="flex  items-center mb-3 px-1">
              <h2 className="text-[12px] font-bold tracking-wide text-[#5E6C84] uppercase">
                {column.title}
              </h2>

              <span className="text-[12px] ml-1 font-semibold text-[#5E6C84]">
                ({columnIssues.length})
              </span>
            </div>

            {/* Column */}
         <div
  className="
    bg-[#eff0f1]
    rounded
    p-2
    w-full
    flex
    flex-col
  "
>
  {/* Cards */}
  <div
    className="
      flex
      flex-col
      gap-2
      h-[412px]
      overflow-y-auto
      pr-1
    "
  >
    {columnIssues.map((issue) => (
      <IssueCard
        key={issue.id}
        issue={issue}
      />
    ))}
  </div>

  
</div>
          </div>
        );
      })}
    </div>
  );
};

export default Columns;