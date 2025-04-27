import React from "react";
import avatar from "../../assets/featuredCoursesThumbnails/avatar.svg";
import star from "../../assets/star.svg";
import user from "../../assets/featuredCoursesThumbnails/User.svg";
import levelIcon from "../../assets/featuredCoursesThumbnails/level.svg";
import clock from "../../assets/featuredCoursesThumbnails/Clock.svg";

export default function FeaturedCourseComponent({
  category,
  oldPrice,
  newPrice,
  title,
  instructorName,
  rating,
  reviewsCount,
  students,
  level,
  duration,
  imgSrc,
  color,
}) {

  
  return (
    <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-2xl">
      <img
        src={imgSrc}
        alt={`${title} Course thumbnail`}
        className="w-full h-full sm:w-auto object-cover"
      />
      <div className="flex flex-col flex-1 justify-center p-4 gap-3 w-full">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className={`px-2 py-1 ${color.bg} ${color.text} rounded text-sm`}>
            {category}
          </p>
          <p className="font-medium">
            ${newPrice}{" "}
            <span className="line-through text-gray-400">${oldPrice}</span>
          </p>
        </div>
        <p className="text-left sm:text-center font-medium text-base md:text-lg">
          {title}
        </p>
        <div className="flex flex-col xs:flex-row justify-between gap-2">
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <img src={avatar} alt="Instructor" className="size-4" />
            <span>{instructorName}</span>
          </div>
          <p className="flex items-center gap-1 text-sm">
            <img src={star} alt="Rating" className="size-3" />
            {rating}
            <span className="text-gray-400">({reviewsCount})</span>
          </p>
        </div>
        <hr className="text-gray-300 -mx-4" />
        <div className="flex flex-wrap justify-between items-center gap-y-2 text-sm">
          <div className="flex items-center gap-1.5">
            <img src={user} alt="user icon" className="size-4" />
            <p>{students / 1000}K</p>
            <p className="text-gray-500">students</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={levelIcon} alt="Level" className="size-4" />
            <p className="text-gray-700">{level}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={clock} alt="Duration" className="size-4" />
            <p className="text-gray-700">{duration} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
