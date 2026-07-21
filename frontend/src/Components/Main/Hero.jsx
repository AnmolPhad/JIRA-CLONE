import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Hero() {
  return (
    <div className="h-screen bg-[#FAFBFC] overflow-hidden">
      {/* Left Blue Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
          ml-[304px]
          h-screen
          overflow-y-auto
          bg-white
        "
      >
        <div className="w-[880px] p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Hero;