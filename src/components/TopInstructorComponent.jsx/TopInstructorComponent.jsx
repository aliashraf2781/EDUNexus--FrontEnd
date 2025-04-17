import React from "react";
import instructor from "../../assets/TopInstructors/Instructor1.svg";
import styles from "./TopInstructor.module.css";
export default function TopInstructorComponent() {
  return (
    <div className="relative border border-zinc-500 w-fit p-3 flex flex-col justify-center items-center max-w-96 rounded-4xl">
      <img src={instructor} alt="" className="2xl:absolute 2xl:-inset-y-36" />
      <div
        className={`hidden 2xl:block bg-primary w-52 h-48 ${styles.photoShadow} rounded-t-4xl `}
      ></div>
      <h3 className="text-teal-700 text-lg font-medium mt-6 2xl:mt-20">
        Hamada ShaL7
      </h3>
      <p className="mb-10 ">Footballer</p>
      <p className="text-lg text-center ">
        Hi , I'am Hamada ShaL7 , I'm here to teach you everything about football
      </p>
    </div>
  );
}
