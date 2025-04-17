import React from "react";

const UpcomingQuizzes = () => {
  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      <div className="border border-gray-300 rounded-md p-6 bg-white">
        <h1 className="text-orange-500 text-xl font-semibold mb-4">
          Rules to Follow After Watching Each Video (For Quiz)
        </h1>
        <ol className="list-decimal list-inside text-gray-800 space-y-1 text-sm sm:text-base">
          <li>Watch the full video without skipping any part.</li>
          <li>Take written notes during the video.</li>
          <li>Review your notes after finishing the video.</li>
          <li>Rewatch any part of the video that was not clear.</li>
          <li>Complete all assignments or exercises related to the video.</li>
          <li>Answer any quiz or practice question linked to the video.</li>
          <li>
            Do not move to the next video until you fully understand the current
            one.
          </li>
          <li>
            Keep a record of questions or doubts for discussion or review.
          </li>
        </ol>
      </div>
      <div className="border border-gray-300 rounded-md p-6 bg-white">
        <h2 className="text-[#FF6636] text-center font-semibold mb-4 text-xl sm:text-xl">
          Quiz on Chapter 5
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700 justify-items-center">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-[#FF6636]"></i>
            <span>
              <span className="font-semibold text-gray-900">Available on:</span>{" "}
              April 20 at 10 AM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-hourglass-half text-[#FF6636]"></i>
            <span>
              <span className="font-semibold text-gray-900">Time limit:</span>{" "}
              30 Mins
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-[#FF6636]"></i>
            <span>
              <span className="font-semibold text-gray-900">Deadline:</span>{" "}
              April 30 at 10 AM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-repeat text-[#FF6636]"></i>
            <span>
              <span className="font-semibold text-gray-900">
                Attempts allowed:
              </span>{" "}
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingQuizzes;
