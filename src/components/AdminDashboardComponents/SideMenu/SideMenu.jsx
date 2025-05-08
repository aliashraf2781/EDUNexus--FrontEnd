import {
  Users,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      label: "Instructors",
      icon: <Users className="h-5 w-5 mr-2" />,
      path: "/admin",
    },
    {
      label: "Students",
      icon: <GraduationCap className="h-5 w-5 mr-2" />,
      path: "/admin/students",
    },
    // Add more links as needed
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-orange-500">EduNEXUS Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded font-medium ${
                isActive
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <LogOut className="h-5 w-5 mr-2" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
