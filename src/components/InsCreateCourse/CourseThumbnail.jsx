import React from "react";
import thumbnailImg from "../../assets/instructorIMG/Icon (1).png";
import upload from "../../assets/instructorIMG/UploadSimple.png";
const CourseThumbnail = () => {
  return (
    <div>
      <h3 className="px-4 text-xl font-semibold text-gray-800 mb-4 lg:mb-0 lg:mr-4">
        Course Thumbnail
      </h3>

      <div className="flex flex-col lg:flex-row items-center bg-white p-4 rounded-md ">
        <img
          src={thumbnailImg}
          alt="Upload Thumbnail"
          className="w-32 h-32 mb-4 lg:mb-0 lg:mr-4"
        />
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-sm text-gray-600 text-center lg:text-left mb-2">
            Uploaour course Thumbnail here.
            <br />
            <span className="font-semibold">Important guidelines:</span>{" "}
            1200x800 pixels or 12:8 Ratio.
            <br />
            Supported format:{" "}
            <span className="font-semibold">.jpg, .jpeg, .png</span>
          </p>
          <button className="bg-[#FFEEE8] text-[#FF6636] font-semibold px-4 py-2 rounded-md mt-2 hover:cursor-pointer flex items-center outline-none">
            Upload Image
            <img src={upload} alt="Upload Icon" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseThumbnail;
