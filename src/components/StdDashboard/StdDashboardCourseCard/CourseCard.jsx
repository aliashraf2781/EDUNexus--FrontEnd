import { useState } from "react";
import { NavLink } from "react-router";

const CourseCard = ({ image, category, title, progress }) => {
  const [started, setStarted] = useState(false);

  return (
    <NavLink
      to={"course-lesson"}
      className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full"
    >
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500">{category}</p>
        <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>

        {started ? (
          <div className="pt-2">
            <button className="w-full text-[#FF6636] rounded px-4 py-2 text-xs transition bg-[#FFEEE8] cursor-pointer">
              Watch Lecture
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStarted(true)}
                className="text-[#FF6636] rounded px-4 py-2 text-xs transition hover:bg-[#FF6636] hover:text-white bg-[#FFEEE8] cursor-pointer"
              >
                Watch Lecture
              </button>

              <span className="text-xs text-green-500 font-semibold">
                {progress}% Completed
              </span>
            </div>

            <div className="h-0.5 bg-gray-200 rounded mt-2">
              <div
                className="h-full bg-[#FF6636] rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
    </NavLink>
  );
};

export default CourseCard;
