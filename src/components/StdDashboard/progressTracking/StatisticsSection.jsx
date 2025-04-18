import React from "react";

export default function StudyStatsProgress() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-4 md:p-8">
      <div className="bg-white rounded-lg border border-gray-200 flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-gray-500 font-semibold">STUDY STATISTICS</h2>
          <div className="flex space-x-2 text-xs border border-gray-300">
            <button className="text-gray-400 bg-gray-100 hover:text-black hover:cursor-pointer px-2 py-1">week</button>
            <button className="text-gray-400 hover:text-black hover:cursor-pointer px-2 py-1">month</button>
          </div>
        </div>

        <div className="flex items-end justify-between h-60">
          {[
            { day: "SAT", height: 40 },
            { day: "SUN", height: 130 },
            { day: "MON", height: 90 },
            { day: "TUE", height: 110 },
            { day: "WED", height: 200 },
            { day: "THU", height: 180 },
            { day: "FRI", height: 120 },
          ].map((bar, idx) => {
            let bgColor = "bg-[rgba(255,102,54,0.6)]";

            if (bar.height === 200) {
              bgColor = "bg-[#ff5722]";
            } else if (bar.height === 180 || bar.height === 120) {
              bgColor = "bg-[rgba(255,102,54,0.25)]";
            }

            return (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-10 sm:w-13 md:w-12 lg:w-19 mb-1 ${bgColor} rounded`} style={{
                  height: `${bar.height}px`
                }}></div>

                <span className="text-xs text-gray-500">{bar.day}</span>
              </div>
            );
          })}
        </div>
      </div>


      <div className="bg-white rounded-lg border border-gray-200 w-full md:w-1/4 p-4">
        <h2 className="text-sm text-gray-500 font-semibold mb-10">PROGRESS</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-35 h-35 mb-1">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-[rgba(242,242,242,1)]"
                strokeWidth="1.8"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[rgba(246,100,48,0.59)]"
                strokeWidth="1.8"
                strokeDasharray="80, 100"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />

              <path
                className="text-[#FFFFFF]"
                strokeWidth="1.8"
                stroke="currentColor"
                fill="none"
                transform="scale(0.85) translate(3.15 3.15)"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[rgba(246,100,48,0.87)]"
                strokeWidth="1.8"
                strokeDasharray="60,100"
                stroke="currentColor"
                fill="none"
                transform="scale(0.85) translate(3.15 3.15)"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-center"> <span className="text-3xl font-bold">45% </span><br /> <span className="text-sm text-[#DB2D2D]"> 80%</span></span>
            </div>
          </div>

          <div className="text-xs flex justify-between items-center px-3 w-full mt-10">
            <p className="font-bold text-[#000000]">45% Completed</p>
            <p className="font-bold text-[#000000]">80% Enrolled</p>
          </div>
        </div>
      </div>
    </div>
  );
}