import React from "react";
import { User } from "lucide-react";
import {
  useGetCoursesQuery,
  useGetUserDataQuery,
} from "../../services/apiSlice";
import { useNavigate } from "react-router";

export default function InstructorProfilePage() {
  const navigate = useNavigate();
  const { data: instructor, isLoading: loadingInstructor } =
    useGetUserDataQuery();
  const { data: courses, isLoading: loadingCourses } = useGetCoursesQuery();

  if (loadingInstructor || loadingCourses) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-3"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  const instructorCourses = courses?.filter(
    (course) => course.createdBy === instructor._id
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Instructor Header Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-[#ff6636] to-orange-400 h-32"></div>
        <div className="px-6 py-8 relative">
          <div className="absolute -top-16 left-6 bg-white p-2 rounded-xl shadow-md">
            <div className="flex items-center justify-center w-24 h-24 bg-orange-100 rounded-lg text-[#ff6636]">
              <User size={48} strokeWidth={1.5} />
            </div>
          </div>

          <div className="ml-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {instructor.name}
                </h2>
                <p className="text-gray-600 font-medium">{instructor.title}</p>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0">
                <a
                  href={instructor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white border border-[#ff6636] text-[#ff6636] rounded-md hover:bg-orange-50 transition flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Website
                </a>
                <a
                  href={instructor.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white border border-[#ff6636] text-[#ff6636] rounded-md hover:bg-orange-50 transition flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                  Materials
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 leading-relaxed">
                {instructor.description}
              </p>
              <div className="mt-4 py-3 px-4 bg-gray-50 rounded-lg inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${instructor.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {instructor.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#ff6636] mr-3"></div>
          <h3 className="text-2xl font-bold text-gray-800">
            Courses by {instructor.name}
          </h3>
        </div>

        {instructorCourses?.length === 0 ? (
          <div className="py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-[#ff6636] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-lg">No courses found.</p>
            <p className="text-gray-500 mt-2">
              The instructor hasn't published any courses yet.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructorCourses.map((course) => (
              <div
                key={course._id}
                className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition group"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition"
                  />
                  <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded text-sm font-medium text-[#ff6636]">
                    ${course.price}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#ff6636] transition">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 mt-2 line-clamp-3 text-sm">
                    {course.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {course.lessons?.length || 0} Lessons
                    </div>

                    <button
                      onClick={() =>
                        navigate(`instructorCourses/${course._id}`)
                      }
                      className="text-sm text-[#ff6636] hover:underline font-medium flex items-center"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
