import React from "react";

export default function DeadlinesSection() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="font-semibold text-2xl mb-6">
        Upcoming Deadlines For Quizzes Or Assignments
      </h2>

      <div className="Assignment-items relative h-80 bg-white shadow-md rounded-xl pt-12 px-6 pb-5 space-y-6 border border-gray-200 overflow-x-auto">
        <div className="absolute top-3 left-[66.2%] transform -translate-x-1/2 z-30 flex flex-col items-center">
          <div className="bg-[#F24822] text-white text-xs px-7 py-2 font-semibold mb-1">
            Milestone
          </div>
        </div>

        <div className="absolute top-3 bottom-0 left-[66%] w-2 rounded-full bg-[#F24822] z-20"></div>
        <div className="grid grid-cols-3 gap-4 text-center font-semibold z-10 relative min-w-[800px]">
          <div className="bg-slate-800 text-white py-2 rounded-md">
            This week
          </div>
          <div className="bg-slate-800 text-white py-2 rounded-md">
            This month
          </div>
          <div className="bg-slate-800 text-white py-2 rounded-md">
            Next month
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm font-medium z-10 relative min-w-[800px]">
          <div className="space-y-2">
            <div className="bg-[#FFECE6] text-black py-2 px-3 rounded-md w-full max-w-[240px]">
              JS Quiz
            </div>
            <div className="bg-[#FFECE6] text-black py-2 px-3 mt-4 rounded-md w-120">
              SQL Assignment
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-[rgba(255,102,54,0.6)] text-black py-2 px-3 rounded-md w-full max-w-[300px]">
              React Project Submission
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-[#FFECE6] text-black py-2 px-3 rounded-md w-full max-w-[300px]">
              Python Certification Exam
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-[rgba(255,102,54,0.6)] text-black py-2 px-4 rounded-md text-center ml-50 font-medium text-sm z-10 relative w-150">
              Machine Learning Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
