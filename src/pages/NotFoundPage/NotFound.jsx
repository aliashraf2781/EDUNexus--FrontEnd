import React from "react";
import NotFound from "../../assets/Not Found Page/404.svg";
export default function NotFoundPage() {
  return (
    <div className="py-16 px-2 container flex flex-col lg:flex-row justify-evenly items-center">
      <div className="flex flex-col  gap-8 ">
        <h1 className="text-gray-100 font-semibold text-7xl">Error 404</h1>
        <h2 className="text-primary font-semibold text-5xl -mt-4">
          Oops! page not found
        </h2>
        <p className="text-gray-700 text-xl leading-8">
          Something went wrong. It’s look that your requested <br /> could not
          be found. It's look like the link is broken or the <br /> page is
          removed.
        </p>
        <button
          type="button"
          className="self-start cursor-pointer text-white px-8 py-3 font-semibold bg-primary hover:bg-orange-600 active:bg-amber-700 "
        >
          Go Back
        </button>
      </div>
      <img src={NotFound} alt="" />
    </div>
  );
}
