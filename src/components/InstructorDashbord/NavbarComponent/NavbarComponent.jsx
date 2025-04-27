import { Bell } from "lucide-react";
import React from "react";
import avatar from "../../../assets/Instructor Dashboard navbar/avatarsvg.svg";
import { LogOut } from "lucide-react";
import { Link } from "react-router";
export default function NavbarComponent() {
  return (
    <div className=" flex justify-between flex-wrap bg-white px-5">
      <div>
        {" "}
        <p>Good Morning</p>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <label htmlFor="Search">
          <div className="relative">
            <input
              type="text"
              id="Search"
              placeholder="Search"
              className="mt-0.5 pl-9 h-10 bg-slate-100 w-full  border-gray-300 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 left-2 grid w-8 place-content-center">
              <button
                type="button"
                aria-label="Submit"
                className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </label>
        <span className="p-2 bg-slate-100 ">
          <Bell className="" />
        </span>
        <img src={avatar} alt="" className="w-8" />
        <Link
          to={"/"}
          className="
          text-sm font-semibold text-gray-700 flex items-center gap-2 cursor-pointer
          border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 transition duration-200
        "
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
