import React from "react";

function QuizCard() {
  return (
    <div className="w-full sm:w-[300px] md:w-[400px] h-[346px] rounded-[10px] flex flex-col justify-between bg-[#CA876526] p-5">
      <div className="flex justify-between items-center mb-4">
        <p className="bg-white text-sm px-3 py-1 rounded-lg font-semibold">
          15 min
        </p>
        <button className="bg-white text-sm px-3 py-1 rounded-lg font-semibold text-[#1935CA]">
          Edit
        </button>
      </div>
      <p className="text-[16px] flex items-center  px-4 text-center bg-[#FFC3B0F7] text-[#FF6636] font-medium rounded-[10px] h-1/5">
        Quiz Title
      </p>
    </div>
  );
}

export default QuizCard;
