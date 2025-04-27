import React from "react";
import FeaturedCourseComponent from "../FeaturedCourseComponent/FeaturedCourseComponent";
import healthThumbnail from "../../assets/featuredCoursesThumbnails/healthThumbnail.svg";
import musicThumbnail from "../../assets/featuredCoursesThumbnails/musicThumbnail.svg";
import personalThumbnail from "../../assets/featuredCoursesThumbnails/personalThumbnail.svg";
import productivityThumbnail from "../../assets/featuredCoursesThumbnails/productivityThumbnail.svg";
import { Link, NavLink } from "react-router";
const categoryColors = {
  Health: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Music: {
    bg: "bg-lime-100",
    text: "text-lime-700",
  },
  "Personal Development": {
    bg: "bg-rose-100",
    text: "text-rose-700",
  },
  Productivity: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
};
const featuredCourses = [
  {
    category: "Health",
    oldPrice: 79.99,
    newPrice: 14.99,
    title: "Nutrition and Health Coaching",
    instructorName: "Dr. Jane Smith",
    rating: 4.5,
    reviewsCount: 2300,
    students: 12000,
    level: "All Levels",
    duration: "12h",
    imgSrc: healthThumbnail,
  },
  {
    category: "Music",
    oldPrice: 69.99,
    newPrice: 9.99,
    title: "Learn Guitar in 30 Days",
    instructorName: "John Mayer",
    rating: 4.6,
    reviewsCount: 3100,
    students: 15000,
    level: "Beginner",
    duration: "10h",
    imgSrc: musicThumbnail,
  },
  {
    category: "Personal Development",
    oldPrice: 59.99,
    newPrice: 11.99,
    title: "Boost Your Confidence & Self-Esteem",
    instructorName: "Mel Robbins",
    rating: 4.4,
    reviewsCount: 1980,
    students: 8000,
    level: "All Levels",
    duration: "6h",
    imgSrc: personalThumbnail,
  },
  {
    category: "Productivity",
    oldPrice: 49.99,
    newPrice: 8.99,
    title: "Master Time Management & Focus",
    instructorName: "Thomas Frank",
    rating: 4.7,
    reviewsCount: 2750,
    students: 9500,
    level: "Intermediate",
    duration: "5h",
    imgSrc: productivityThumbnail,
  },
];
export default function FeaturedCoursesComponent() {
  return (
    <div className="flex justify-center  ">
      <div className="py-10 bg-white max-w-[1480px] w-full -mt-80  border border-gray-100">
        <h1 className="text-center text-primary font-bold text-5xl mb-10">
          Our Feature Courses
        </h1>
        <NavLink
          to={"course-details"}
          className=" mx-auto container grid  grid-cols-1  md:grid-cols-2  gap-6 "
        >
          {featuredCourses.map((item) => (
            <FeaturedCourseComponent
              key={item.title}
              category={item.category}
              color={categoryColors[item.category]}
              duration={item.duration}
              imgSrc={item.imgSrc}
              instructorName={item.instructorName}
              level={item.level}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              rating={item.rating}
              reviewsCount={item.reviewsCount}
              students={item.students}
              title={item.title}
            />
          ))}
        </NavLink>
        <Link to={"courses"} className="flex justify-center mt-10">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}
