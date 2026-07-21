import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Hero() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar />
      <Sidebar />

      <main className="ml-[326px] min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Hero;