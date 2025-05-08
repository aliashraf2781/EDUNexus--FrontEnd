import React, { useEffect, useState } from "react";
import axios from "axios";
import userprofile from "../../../assets/StudDashboardImages/Photos.png"; // Default profile picture
import editphoto from "../../../assets/StdDashboardIcons/UploadSimple.png";
import sms from "../../../assets/StdDashboardIcons/sms.png";
import searchIcon from "../../../assets/StdDashboardIcons/MagnifyingGlass.png";
import noticon from "../../../assets/StdDashboardIcons/notification-bing.png";

const ProfileSettings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    // profilePicture: userprofile, // Default profile picture
  });
  const [initialUserData, setInitialUserData] = useState({
    name: "",
    email: "",
    // profilePicture: userprofile,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const authToken = localStorage.getItem("token");
  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!authToken) {
        setErrorMessage("No authorization token found. Please login.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://rat-intent-hideously.ngrok-free.app/api/auth/me", {
          headers: {
            "ngrok-skip-browser-warning": true,
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data) {
          // If profilePicture is not in the response, use the default image
          setUser({
            name: response.data.name,
            email: response.data.email,
            profilePicture: response.data.profilePicture || userprofile,
          });
          // Set the initial user data to compare changes
          setInitialUserData({
            name: response.data.name,
            email: response.data.email,
            profilePicture: response.data.profilePicture || userprofile,
          });
        } else {
          setErrorMessage("Unable to fetch user data.");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setErrorMessage("Error fetching user data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [authToken]);

  // Handle profile update
  const handleProfileUpdate = async () => {
    if (user.name === initialUserData.name && user.email === initialUserData.email) {
      // If no changes were made, prevent unnecessary API call and alert
      alert("No changes detected.");
      return;
    }

    try {
      const response = await axios.patch(
        "https://rat-intent-hideously.ngrok-free.app/api/auth/me", 
        {
          name: user.name,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, 
            "ngrok-skip-browser-warning": true,
          },
        }
      );
      alert("Profile updated successfully!");
      // Update the initial user data to reflect changes
      setInitialUserData({ name: user.name, email: user.email });
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Failed to update profile.");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF3F0] p-4">
      <div className="px-6 py-4 shadow-sm bg-[#FFF3F0] flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome, <span className="text-black">{user.name}</span>
          </h1>
          <p className="text-sm text-gray-500">Tue, 05 June 2025</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white px-4 py-2 shadow-sm border border-gray-200 w-full md:w-80">
            <img src={searchIcon} alt="Search" className="w-4 h-4 mr-2 opacity-60" />
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
              src={user.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 p-6">
          <div className="flex items-start gap-6">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <button className="flex items-center gap-1 mt-2 px-3 py-1.5 text-xs font-medium text-[#FF6636] bg-[#FFEEE8] rounded-md hover:cursor-pointer">
                <img src={editphoto} alt="Edit Icon" className="w-4 h-4" />
                Edit Photo
              </button>
            </div>
          </div>
          <button
            className="mt-4 md:mt-0 bg-[#FF6636] text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            onClick={handleProfileUpdate}
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ 
            { label: "Full Name", name: "name", value: user.name },
            { label: "Email Address", name: "email", value: user.email },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm text-gray-600 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
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
              <p className="text-sm font-medium text-gray-800">{user.email}</p>
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
