import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Board = () => {
  return (
    <div className="flex bg-[#F4F5F7] min-h-screen">
      <Navbar />
      <Sidebar />

      <main className="ml-[346px] flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Kanban Board</h1>

        <p className="text-gray-500">Your board will appear here.</p>
      </main>
    </div>
  );
};

export default Board;
