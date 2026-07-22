import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Board from "../Board/Board";

function Hero() {
  return (
    <div className="h-screen bg-[#FAFBFC] overflow-hidden">
      {/* Left Blue Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
<main className="ml-[304px] px-8 py-6">
    <div className="max-w-[1200px]">
        <Board />
    </div>
</main>
    </div>
  );
}

export default Hero;