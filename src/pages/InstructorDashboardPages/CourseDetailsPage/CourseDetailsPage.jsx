import { useParams } from "react-router-dom";
import { useGetLessonsByCourseIdQuery } from "../../../services/apiSlice";
import { useState } from "react";
import AddingLessonPage from "../AddingLessonPage/AddingLessonPage";


export default function CourseDetailsPage() {
  const { courseId } = useParams();
  const { data, isLoading } = useGetLessonsByCourseIdQuery(courseId);
  const lessons = data?.lessons;
  
  // State to toggle visibility of AddingLessonPage
  const [showAddingLesson, setShowAddingLesson] = useState(false);

  // Handle Add Lesson click
  const handleAddLesson = () => {
    setShowAddingLesson(true); // Show the AddingLessonPage
  };

  if (isLoading) {
    return <div className="p-6">Loading lessons...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Course Lessons</h1>

      {lessons?.length === 0 ? (
        <p>No lessons found for this course.</p>
      ) : (
        <ul className="space-y-4">
          {lessons.map((lesson) => (
            <li key={lesson._id} className="border p-4 rounded">
              <h2 className="font-semibold text-lg">{lesson.title}</h2>
              <p className="text-gray-600">{lesson.description}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <button
          onClick={handleAddLesson}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          + Add Lesson
        </button>
      </div>

      {/* Conditionally render AddingLessonPage component */}
      {showAddingLesson && <AddingLessonPage courseId={courseId} />}
    </div>
  );
}
