import React from "react";
import TopInstructorComponent from "../TopInstructorComponent.jsx/TopInstructorComponent";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function TopInstructorsComponent() {
  return (
    <div className="py-16 container mb-40 ">
      <h2 className="text-center text-5xl text-primary font-semibold mb-20">
        Top Instructors
      </h2>
      <div className="flex justify-center 2xl:justify-between items-center  flex-wrap gap-10  pt-52 2xl:h-[600px]">
        <div className="2xl:self-start 2xl:scale-90">
          <TopInstructorComponent />
        </div>
        <div className="2xl:self-end 2xl:scale-120">
          <TopInstructorComponent />
        </div>
        <div className="2xl:self-start 2xl:scale-90">
          <TopInstructorComponent />
        </div>
      </div>
      <p className=" mt-10 2xl:mt-16 text-center flex justify-center flex-wrap items-center gap-1 ">
        Thousands of students waiting for a instructor. Start teaching & earning
        now!.{" "}
        <Link to="/signup">
          <a href="#" className="flex gap-1.5 text-blue-500 items-center">
            {" "}
            Become Instructor
            <ArrowRight />{" "}
          </a>
        </Link>
      </p>
    </div>
  );
}
