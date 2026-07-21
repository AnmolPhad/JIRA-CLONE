import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Hero() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F5F7]">
      {/* Blue Navbar */}
      <Navbar />

      {/* White Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[326px] flex-1 overflow-y-auto px-6 py-4
      ">
        <Outlet />
      </main>
    </div>
  );
}

export default Hero;