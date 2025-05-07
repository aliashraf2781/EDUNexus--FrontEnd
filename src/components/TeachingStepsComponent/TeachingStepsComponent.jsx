import React from "react";
import woman from "../../assets/teachingSteps/woman.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
ArrowRight;

export default function TeachingStepsComponent() {
  return (
    <div className="py-16 flex flex-col xl:flex-row justify-between items-center">
      <img src={woman} alt="" className="" />
      <div className=" flex flex-col gap-7 w-full sm:w-2/3 ms-1.5 xl:w-4xl bg-secondary p-10 rounded-se-[252px]">
        <h2 className=" text-xl/snug md:text-2xl/snug lg:text-3xl/snug  2xl:text-4xl/snug font-bold line">
          Your teaching & <br className="block sm:hidden" /> earning steps
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="flex items-center gap-4">
            {" "}
            <span className="bg-violet-100 text-indigo-600 rounded-full size-14 text-2xl font-semibold  flex justify-center items-center">
              1
            </span>{" "}
            Apply to become instructor
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-rose-50 text-red-500 rounded-full size-14 text-2xl font-semibold  flex justify-center items-center">
              2
            </span>{" "}
            Build & edit your profile
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-rose-50 text-red-500  rounded-full size-14 text-2xl font-semibold  flex justify-center items-center">
              3
            </span>{" "}
            Create your new course
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-600 rounded-full size-14 text-2xl font-semibold  flex justify-center items-center">
              4
            </span>{" "}
            Start teaching & earning
          </div>
        </div>
        <span className="self-start">
          <a
            className="group relative  w-full xs:w-auto inline-flex justify-center items-center overflow-hidden rounded-sm bg-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-primary focus:ring-2"
            href="#"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold sm:text-sm  transition-all group-hover:me-4">
              <Link to="/instructorRegister">
              Start Teaching</Link>
            </span>
          </a>
        </span>
      </div>
    </div>
  );
}
