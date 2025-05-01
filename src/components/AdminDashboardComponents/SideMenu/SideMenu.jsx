// components/Sidebar.jsx
import {
  Users,
  Calendar,
  BookOpen,
  Settings,
  LogOut,
  BarChart,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-orange-500">EduNEXUS Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <div className="bg-orange-50 text-orange-600 px-3 py-2 rounded font-medium flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Instructors
        </div>
        {/* <div className="text-gray-600 px-3 py-2 rounded hover:bg-gray-100 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Schedule
        </div>
        <div className="text-gray-600 px-3 py-2 rounded hover:bg-gray-100 flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Courses
        </div>
        <div className="text-gray-600 px-3 py-2 rounded hover:bg-gray-100 flex items-center">
          <BarChart className="h-5 w-5 mr-2" />
          Analytics
        </div>
        <div className="text-gray-600 px-3 py-2 rounded hover:bg-gray-100 flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Settings
        </div> */}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center text-gray-600 hover:text-gray-900">
          <LogOut className="h-5 w-5 mr-2" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}
