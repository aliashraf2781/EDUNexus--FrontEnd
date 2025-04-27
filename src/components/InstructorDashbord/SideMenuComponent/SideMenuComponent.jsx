import React from "react";
import logo from "../../../assets/footer logo.svg";
import { ChartColumnBig, LogOut } from "lucide-react";
import addCourseSvg from "../../../assets/Instructor Dashboard SideMenu/PlusCircle.svg";
import myCoursesSvg from "../../../assets/Instructor Dashboard SideMenu/Stack.svg";
import studentProgressSvg from "../../../assets/Instructor Dashboard SideMenu/CreditCard.svg";
import messagesSvg from "../../../assets/Instructor Dashboard SideMenu/ChatCircleDots.svg";
import quizzesSvg from "../../../assets/Instructor Dashboard SideMenu/quizzes.svg";
import settingsSvg from "../../../assets/Instructor Dashboard SideMenu/settings.svg";

export default function SideMenuComponent() {
  return (
    <div className="fixed flex flex-col justify-between h-svh p-3 w-60 bg-dark text-gray-100">
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-32 h-7" />
        </div>
        <hr className="text-zinc-700 -mx-3" />
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ChartColumnBig className="text-gray-400" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={addCourseSvg} alt="" />
                <span>Create New Course</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={myCoursesSvg} alt="" />
                <span>My Courses</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={studentProgressSvg} alt="" />
                <span>View Student Progress</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={messagesSvg} alt="" />
                <span>Messages</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={quizzesSvg} alt="" />
                <span>Quizzes</span>
              </a>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={settingsSvg} alt="" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <LogOut />
        <p>Sign-out</p>
      </div>
    </div>
  );
}
