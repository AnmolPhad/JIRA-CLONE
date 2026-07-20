import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Kanban from "../Kanban/Kanban";

const Board = () => {
  return (
    <div className="flex bg-[#F4F5F7] min-h-screen">
      {/* Blue Navbar */}
      <Navbar />

      {/* White Project Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[346px] flex-1 p-8">
        <Kanban />
      </main>
    </div>
  );
};

export default Board;