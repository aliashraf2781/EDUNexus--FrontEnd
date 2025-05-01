// components/Navbar.jsx
import { Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Instructor Management</h2>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center">
            <img
              src="/api/placeholder/32/32"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            {/* <span className="ml-2 font-medium">Admin User</span>
            <ChevronDown className="h-4 w-4 ml-1 text-gray-500" /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
