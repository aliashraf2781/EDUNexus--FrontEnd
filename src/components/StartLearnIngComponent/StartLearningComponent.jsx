import React from "react";

export default function StartLearningComponent() {
  return (
    <>
      <div className="py-24 flex lg:flex-row flex-col gap-24 justify-evenly items-center bg-dark text-white">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">
            Start learning with 67.1k <br /> students around the world.
          </h2>
          <div className="flex items-center gap-4">
            <a
              class="inline-block rounded-sm bg-primary font-semibold px-8 py-3 text-sm  text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
              href="#"
            >
              Join the Family
            </a>
            <a
              class="inline-block rounded-sm bg-gray-800 font-semibold px-8 py-3 text-sm  text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
              href="#"
            >
              Browse all courses
            </a>
          </div>
        </div>
        <div className="flex items-center gap-16">
          <div>
            <h2 className="text-4xl font-semibold mb-3 ">6.3k</h2>
            <p className="text-gray-300">Online courses</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-3">1.3k</h2>
            <p className="text-gray-300">Certified Instructor</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-3">99.9%</h2>
            <p className="text-gray-300">Success Rate</p>
          </div>
        </div>
      </div>
      <hr className="text-light" />
    </>
  );
}
