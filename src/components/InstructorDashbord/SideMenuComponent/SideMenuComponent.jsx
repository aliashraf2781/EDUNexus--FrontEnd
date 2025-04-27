import React from "react";
import logo from "../../../assets/footer logo.svg";
import { ChartColumnBig, LogOut } from "lucide-react";
import addCourseSvg from "../../../assets/Instructor Dashboard SideMenu/PlusCircle.svg";
import myCoursesSvg from "../../../assets/Instructor Dashboard SideMenu/Stack.svg";
import studentProgressSvg from "../../../assets/Instructor Dashboard SideMenu/CreditCard.svg";
import messagesSvg from "../../../assets/Instructor Dashboard SideMenu/ChatCircleDots.svg";
import quizzesSvg from "../../../assets/Instructor Dashboard SideMenu/quizzes.svg";
import settingsSvg from "../../../assets/Instructor Dashboard SideMenu/settings.svg";
import { Link, NavLink } from "react-router";

export default function SideMenuComponent() {
  return (
    <div className="min-h-[100vh] relative top-0 bottom-0 flex flex-col justify-between  p-3 w-60 bg-dark text-gray-100">
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-32 h-7" />
        </div>
        <hr className="text-zinc-700 -mx-3" />
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <NavLink
                to={"dashboard"}
                end
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 rounded-md ${
                    isActive ? "bg-gray-200 text-orange-600" : "text-gray-400"
                  }`
                }
              >
                <ChartColumnBig className="text-gray-400" />
                <span className="">Dashboard</span>
              </NavLink>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <NavLink
                to={"create-course"}
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 rounded-md ${
                    isActive ? "bg-gray-200 text-orange-600" : "text-gray-400"
                  }`
                }
                rel="noopener noreferrer"
              >
                <img src={addCourseSvg} alt="" />
                <span>Create New Course</span>
              </NavLink>
            </li>
            {/* <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <NavLink 

                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={myCoursesSvg} alt="" />
                <span>My Courses</span>
              </NavLink>
            </li> */}
            {/* <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={studentProgressSvg} alt="" />
                <span>View Student Progress</span>
              </a>
            </li> */}
            {/* <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={messagesSvg} alt="" />
                <span>Messages</span>
              </a>
            </li> */}

            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <NavLink
                to={"create-quiz"}
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 rounded-md ${
                    isActive ? "bg-gray-200 text-orange-600" : "text-gray-400"
                  }`
                }
              >
                <img src={quizzesSvg} alt="" />
                <span>Quizzes</span>
              </NavLink>
            </li>
            <li className="rounded-sm hover:bg-gray-800 hover:text-gray-50">
              <NavLink
                to={"settings"}
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 rounded-md ${
                    isActive ? "bg-gray-200 text-orange-600" : "text-gray-400"
                  }`
                }
              >
                <img src={settingsSvg} alt="" />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Link
        to={"/signup"}
        className="flex items-center p-2 mt-12 space-x-4 justify-self-end"
      >
        <LogOut />
        <p>Sign-out</p>
      </Link>
    </div>
  );
}
