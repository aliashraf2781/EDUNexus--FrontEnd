import React from "react";
import kid from "../../assets/Header.png";

export default function HeroSection() {
  return (
    <section className=" p-8 md:p-12 lg:px-16 lg:py-24 overflow-hidden bg-gray-50 flex justify-between  items-center  gap-20 flex-col md:flex-row">
      <div className="">
        <div className="mx-auto  text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-5xl font-semibold text-gray-900 md:text-7xl  ">
            Learn with expert anytime anywhere
          </h2>

          <p className="hidden text-2xl text-gray-500 md:mt-4 md:block">
            Our mision is to help people to find the best course <br /> online
            and learn with expert anytime, anywhere.
          </p>

          <div className="mt-4 md:mt-8 mx-auto flex justify-center md:block">
            <a
              href="#"
              className="  inline-block rounded-sm bg-primary px-12 py-3 text-sm font-bold text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
      <div className=" w-[300px] md:w-[1000px]">
        <img src={kid} className="w-full object-contain " />
      </div>
    </section>
  );
}
