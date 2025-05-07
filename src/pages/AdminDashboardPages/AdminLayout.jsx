
import Navbar from "../../components/AdminDashboardComponents/Navbar/Navbart";
import Sidebar from "../../components/AdminDashboardComponents/SideMenu/SideMenu";

import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div className="App">
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
