import React from "react";
import Header from "../../components/InstructorQuizEditorHeader/Header";
import QuizCard from "../../components/InstructorQuizEditorCard/card";

function InstructorQuizEditor() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen">
      <header className="p-5 bg-white shadow-sm">
        <Header />
      </header>

      {/* search-section */}
      <div className="px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <div className="w-full md:w-[85%]">
            <input
              type="text"
              placeholder="Search for quizzes..."
              className="w-full p-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6636]"
            />
          </div>
          <button className="w-full md:w-[15%] bg-[#FF6636] text-white px-4 py-3 rounded-lg hover:shadow-xl transition-all">
            Create Quiz
          </button>
        </div>
      </div>

      {/* quizzes-info */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Quiz Performance", num: "89%" },
          {
            title: "Completed Quiz",
            num: "50",
          },
          { title: "Leaderboard", num: "" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center py-7 rounded-[10px] shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#696F79]">{item.title}</h2>
            <p className="text-3xl font-bold text-[#696F79]">{item.num}</p>
          </div>
        ))}
      </div>

      {/* Recent Quizzes */}
      <div className="bg-white w-full rounded-lg max-w-7xl mx-auto mt-8 p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-[#FF6636] text-2xl font-bold">Recent Quizzes</p>
          <p className="text-[#FF6636] text-base font-medium cursor-pointer hover:underline">
            View All
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </section>
  );
}

export default InstructorQuizEditor;
