import React from "react";
import BasicInformation from "../../components/InsCreateCourse/BasicInformation";
import CourseThumbnail from "../../components/InsCreateCourse/CourseThumbnail";
import CourseLectures from "../../components/InsCreateCourse/CourseLectures";
import FormActions from "../../components/InsCreateCourse/FormActions";
import CourseTrailer from "../../components/InsCreateCourse/CourseTrailer";

const CreateCoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8 border-b border-gray-300">
          <div className="inline-block border-b-2 border-orange-400 pb-2">
            <h1 className="text-xl font-bold text-gray-800">
              Course Information
            </h1>
          </div>
        </div>

        <BasicInformation />

        <div className="flex space-x-4">
          <div className="flex-1">
            <CourseThumbnail />
          </div>
          <div className="flex-1">
            <CourseTrailer />
          </div>
        </div>
        <CourseLectures />
        <FormActions />
      </div>
    </div>
  );
};

export default CreateCoursePage;
