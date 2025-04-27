import React, { useState } from "react";
import userprofile from "../../assets/instructorIMG/Image.png";

const AccountSettings = () => {
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(userprofile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-8">Account Settings</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full sm:w-1/2 p-3 border border-gray-300 outline-none rounded-xl"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full sm:w-1/2 p-3 border border-gray-300 outline-none rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 outline-none rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <select className="border border-gray-300 outline-none rounded-l-xl p-3 bg-gray-100 text-gray-700">
                <option className="text-[#FF6636]">+880</option>
                <option>+1</option>
                <option>+44</option>
                <option>+91</option>
              </select>
              <input
                type="text"
                placeholder="Your Phone number..."
                className="w-full p-3 border border-gray-300 outline-none rounded-r-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-64 h-70 flex flex-col items-center bg-gray-100 p-6 rounded-xl">
          <div className="relative w-40 h-40 mb-4 rounded-xl overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <label
              htmlFor="upload-photo"
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-sm font-medium cursor-pointer"
            >
              <span className="bg-black p-1 rounded-sm text-white mt-25">
                Upload Photo
              </span>{" "}
            </label>

            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Image size should be under 1MB <br /> and image ratio needs to be
            1:1
          </p>
        </div>
      </div>
      <div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Your title, profession or small biography"
            className="w-full p-3 border border-gray-300 outline-none rounded-xl"
          />
        </div>

        <div className="flex justify-between mt-4 items-center mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Biography
          </label>
          <span className="text-xs text-gray-400">{bio.length}/50</span>
        </div>
        <textarea
          maxLength={50}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Your title, profession or small biography"
          className="w-full p-3 border border-gray-300 outline-none rounded-xl h-28 resize-none"
        ></textarea>
      </div>

      <button className="bg-[#FF6636] text-white px-6 py-3 mt-2 rounded-xl hover:bg-orange-600">
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
