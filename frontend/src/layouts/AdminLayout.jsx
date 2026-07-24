import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/admin/AdminNavbar";
import AdminSidebar from "../Components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#F4F5F7] overflow-hidden">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Top Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-8 py-8">

          <div className="max-w-[1600px] mx-auto">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;