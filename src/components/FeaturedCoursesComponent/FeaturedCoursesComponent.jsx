import React, { useEffect, useState } from "react";
import FeaturedCourseComponent from "../FeaturedCourseComponent/FeaturedCourseComponent";
// import healthThumbnail from "../../assets/featuredCoursesThumbnails/healthThumbnail.svg";
// import musicThumbnail from "../../assets/featuredCoursesThumbnails/musicThumbnail.svg";
// import personalThumbnail from "../../assets/featuredCoursesThumbnails/personalThumbnail.svg";
// import productivityThumbnail from "../../assets/featuredCoursesThumbnails/productivityThumbnail.svg";
import { Link, NavLink } from "react-router";
import axios from "axios";

const categoryColors = {
  Health: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  Music: {
    bg: "bg-teal-100",
    text: "text-teal-700",
  },
  "Personal Development": {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  Productivity: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
};

export default function FeaturedCoursesComponent() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/featuredCourses"
        );
        // Log the response to ensure it's correct
        console.log(response.data);
        setCourses(response.data);
      } catch (err) {
        setError("Failed to fetch courses, Error: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Get the first 4 featured courses
  const featuredCourses = courses?.slice(0, 4);

  return (
    <div className="flex justify-center">
      <div className="py-10 bg-white max-w-[1480px] w-full -mt-80 border border-gray-100">
        <h1 className="text-center text-primary font-bold text-5xl mb-10">
          Our Featured Courses
        </h1>
        <NavLink
          to={"course-details"} // Ensure you have a route for course-details
          className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featuredCourses?.map((course) => (
            <FeaturedCourseComponent
              key={course._id}
              category={course.category}
              color={
                categoryColors[course.category]
                  ? categoryColors[course.category]
                  : {
                      bg: "bg-teal-100",
                      text: "text-teal-700",
                    }
              }
              duration={course.duration || "N/A"}
              imgSrc={course.imgSrc}
              instructorName={course.instructorName} 
              level={course.level || "All Levels"}
              newPrice={course.newPrice}
              oldPrice={course.oldPrice} 
              rating={course.rating}
              reviewsCount={course.reviewsCount} 
              students={course.students}
              title={course.title}
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
