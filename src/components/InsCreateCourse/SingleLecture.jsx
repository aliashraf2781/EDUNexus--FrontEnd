import React from "react";
import CourseTrailer from "./CourseTrailer";
import CourseThumbnail from "./CourseThumbnail";
const SingleLecture = ({ index, onRemove }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 relative">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 className="text-md font-semibold mb-4">Lecture {index}</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          placeholder="Lecture title"
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          rows="3"
          placeholder="Lecture description"
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

      <div className="flex flex-col lg:flex-row space-x-4">
        <div className="w-full lg:w-1/2">
          <CourseThumbnail />
        </div>
        <div className="w-full lg:w-1/2">
          <CourseTrailer />
        </div>
      </div>
    </div>
  );
};

export default SingleLecture;
