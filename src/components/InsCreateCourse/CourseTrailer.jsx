import React from "react";
import thumbnailImg from "../../assets/instructorIMG/Icon.png";
import upload from "../../assets/instructorIMG/UploadSimple.png";
const CourseTrailer = () => {
  return (
    <div>
      <h3 className=" px-4 text-xl font-semibold text-gray-800 mb-4 lg:mb-0 lg:mr-4">
        CourseTrailer
      </h3>
      <div className="flex flex-col lg:flex-row items-center bg-white p-4 rounded-md">
        <img
          src={thumbnailImg}
          alt="Upload Trailer"
          className="w-32 h-32 mb-4 lg:mb-0 lg:mr-4"
        />
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-sm text-gray-600 text-center lg:text-left mb-2">
            Students who watch a well-made promo video are 5x more likely to
            enroll.
            <br />
            We've seen that go up to 10x for exceptionally awesome videos.
          </p>
          <button className="bg-[#FFEEE8] text-[#FF6636] font-semibold px-4 py-2 rounded-md mt-2 hover:cursor-pointer flex items-center">
            Upload Image
            <img src={upload} alt="Upload Icon" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseTrailer;
