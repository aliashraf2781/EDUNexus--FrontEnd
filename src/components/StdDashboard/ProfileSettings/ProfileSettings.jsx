import React from "react";
import userprofile from "../../../assets/StudDashboardImages/Photos.png";
import editphoto from "../../../assets/StdDashboardIcons/UploadSimple.png";
import sms from "../../../assets/StdDashboardIcons/sms.png";
import searchIcon from "../../../assets/StdDashboardIcons/MagnifyingGlass.png";
import noticon from "../../../assets/StdDashboardIcons/notification-bing.png";
const ProfileSettings = () => {
  return (
    <div className="min-h-screen  bg-[#FFF3F0] p-4">
      <div className="px-6 py-4 shadow-sm bg-[#FFF3F0] flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome, <span className="text-black">Kevin</span>
          </h1>
          <p className="text-sm text-gray-500">Tue, 05 June 2025</p>
        </div>

        <div className="flex  items-center gap-4">
          <div className="hidden md:flex items-center bg-white px-4 py-2 shadow-sm border border-gray-200 w-full md:w-80">
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 mr-2 opacity-60"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 py-1 rounded-sm outline-none text-sm w-full placeholder:text-gray-400"
            />
          </div>

          <div className="w-15 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
            <img src={noticon} alt="Notifications" className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
            <img
              src={userprofile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md p-6">
        <div className="h-10">
          <img />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 p-6">
          <div className="flex items-start gap-6">
            <img
              src={userprofile}
              alt="Kevin Gilbert"
              className="w-24 h-24 rounded-full object-cover"
            />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Kevin Gilbert
              </h2>
              <p className="text-sm text-gray-500">alexarolive@gmail.com</p>

              <button className="flex items-center gap-1 mt-2 px-3 py-1.5 text-xs font-medium text-[#FF6636] bg-[#FFEEE8] rounded-md hover:cursor-pointer">
                <img src={editphoto} alt="Edit Icon" className="w-4 h-4" />
                Edit Photo
              </button>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-[#FF6636] text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Full Name",
            "Nick Name",
            "Language",
            "Gender",
            "My email Address",
            "Phone Number",
          ].map((label, index) => (
            <div key={index}>
              <label className="block text-sm text-gray-600 mb-1">
                {label}
              </label>
              <input
                type="text"
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-sm placeholder:text-gray-400"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 px-2">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={sms}
              alt="Email Icon"
              className="w-6 h-6 rounded-full bg-orange-100 p-1"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                alexarolive@gmail.com
              </p>
              <p className="text-xs text-gray-400">1 month ago</p>
            </div>
          </div>

          <button className="text-sm text-orange-500 font-medium ml-10">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
