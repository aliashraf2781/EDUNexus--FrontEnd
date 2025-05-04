import CourseCard from "../StdDashboardCourseCard/CourseCard";
import FilterBar from "../StdDashboardFilterBar/FilterBar";
import { useState, useEffect } from "react";
const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3010/courses");
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
        {courses.map((course, idx) => (
          <CourseCard key={idx} image={course.image} title={course.title} category={course.category} progress={course.progress} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
