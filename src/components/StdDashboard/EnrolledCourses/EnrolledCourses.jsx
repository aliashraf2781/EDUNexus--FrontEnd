import CourseCard from "../StdDashboardCourseCard/CourseCard";
import FilterBar from "../StdDashboardFilterBar/FilterBar";
import { useState, useEffect } from "react";
const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://rat-intent-hideously.ngrok-free.app/api/courses/mycourses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <div className="my-4 pt-4">
        <FilterBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {Array.isArray(courses) && courses.map((course) => (
        <CourseCard
          key={course._id}
          image={course.thumbnail}
          title={course.title}
          category={course.category}
          id = {course._id}
          progress={0} // لاحقًا ممكن تحسبها بناءً على عدد الدروس المنتهية
        />
      ))}

      </div>
    </div>
  );
};

export default EnrolledCourses;
