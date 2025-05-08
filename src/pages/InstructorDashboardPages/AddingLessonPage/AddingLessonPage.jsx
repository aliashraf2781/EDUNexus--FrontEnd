import React, { useState } from "react";
import axios from "axios";
import CourseTrailer from "../../../components/InsCreateCourse/CourseTrailer";
import { useSaveLessonMutation } from "../../../services/apiSlice";

// Child: handles upload and summary generation
// Parent: lesson form
function AddingLessonPage({ courseId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [summary, setSummary] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [saveLesson, { isLoading, isSuccess, isError }] = useSaveLessonMutation();
  const handleChildData = ({ videoPath, summary }) => {
    if (videoPath) setVideoPath(videoPath);
    if (summary) setSummary(summary);
    console.log(videoPath, summary);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSaving(true);
    console.log({
      title,
      content,
      path: videoPath,
      summary,
    });
    // try {
    //   await axios.post("/api/lessons", {
    //     title,
    //     content,
    //     videoPath,
    //     summary,
    //   });
    //   setMessage("Lesson saved successfully!");
    // } catch {
    //   setMessage("Failed to save lesson.");
    // } finally {
    //   setSaving(false);
    // }
  };

  const handleSaving =  async (e) => {
    e.preventDefault();
    setSaving(true);
  
    console.log({
      title,
      content,
      path: videoPath,
      summary,
    });
  
    try {
      await saveLesson({
        courseId, // make sure this is defined in your component
        title,
        content,
        path: videoPath, // assuming your backend expects "path"
        summary,
      }).unwrap();
  
      setMessage("Lesson saved successfully!");
    } catch (error) {
      console.error("Save failed", error);
      setMessage("Failed to save lesson.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Add New Lesson
          </h2>
          <p className="text-gray-600">
            Complete the form below to create a new lesson for your course.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="lesson-title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Lesson Title <span className="text-red-500">*</span>
            </label>
            <input
              id="lesson-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter a descriptive title for your lesson"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lesson-content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Lesson Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="lesson-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
              placeholder="Provide a detailed description of what students will learn in this lesson"
              required
            />
          </div>
        </div>

        {/* Placeholder for VideoUpload component */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Video Upload
          </h3>
          <p className="text-gray-600 mb-4">
            Upload your lesson video here. The system will automatically process
            it and generate a summary.
          </p>

          {/* This is where the VideoUpload component would go */}
          {/* <VideoUpload onData={handleChildData} /> */}
          <CourseTrailer onData={handleChildData} />
          {/* Placeholder for demonstration purposes */}
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 h-40">
            <div className="text-center">
              <p className="text-gray-500">
                Video upload component will appear here
              </p>
              <p className="text-sm text-gray-400 mt-1">
                This is just a placeholder
              </p>
            </div>
          </div>
        </div>

        {/* Information display area */}
        {(videoPath || summary) && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Processing Results
            </h3>

            {videoPath && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Video Path:
                </span>
                <p className="text-sm text-gray-600 break-all bg-white p-2 rounded border border-gray-200 mt-1">
                  {videoPath}
                </p>
              </div>
            )}

            {summary && (
              <div>
                <span className="text-sm font-medium text-gray-700">
                  AI-Generated Summary:
                </span>
                <p className="text-sm text-gray-600 whitespace-pre-line bg-white p-2 rounded border border-gray-200 mt-1">
                  {summary}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Submit button and message */}
        <div className="pt-4 flex items-center justify-between">
          <button
          onClick={handleSaving}
            type="submit"
            disabled={saving}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors duration-200 
              ${
                saving
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
          >
            {saving ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving...
              </span>
            ) : (
              "Save Lesson"
            )}
          </button>

          {message && (
            <div
              className={`text-sm font-medium px-4 py-2 rounded-md ${
                message.includes("success")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddingLessonPage;
