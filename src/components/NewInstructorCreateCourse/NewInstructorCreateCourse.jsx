import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddCourseMutation } from "../../services/apiSlice";

const subjects = [
  { id: 1, name: "Science" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Mathematics" },
  { id: 4, name: "English" },
  { id: 5, name: "Psychology and Sociology" },
  { id: 7, name: "Chemistry" },
  { id: 8, name: "Biology" },
  { id: 11, name: "History" },
];

const grades = [
  { id: 1, name: "Grade 1" },
  { id: 2, name: "Grade 2" },
  { id: 3, name: "Grade 3" },
  { id: 4, name: "Grade 4" },
  { id: 5, name: "Grade 5" },
  { id: 6, name: "Grade 6" },
  { id: 7, name: "Grade 7" },
  { id: 8, name: "Grade 8" },
  { id: 9, name: "Grade 9" },
  { id: 10, name: "Grade 10" },
  { id: 11, name: "Grade 11" },
  { id: 12, name: "Grade 12" },
];

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").positive("Must be positive"),
  category: Yup.string().required("Category is required"),
  grade: Yup.number().required("Grade is required"),
  thumbnail: Yup.string().url("Invalid URL").required("Thumbnail is required"),
});

export default function AddCoursePage() {
  const [addCourse] = useAddCourseMutation();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    const selectedGrade = grades.find((g) => g.id === Number(values.grade));
    const fullTitle = `${values.title} for ${selectedGrade?.name}`;

    const courseData = {
      title: fullTitle,
      description: values.description,
      price: Number(values.price),
      category: values.category,
      rate: 5,
      thumbnail: values.thumbnail,
    };

    try {
      await addCourse(courseData).unwrap();
      setSuccessMessage("✅ Course added successfully!");
      resetForm();
    } catch (error) {
      console.error("❌ Failed to add course:", error);
      setSuccessMessage("❌ Something went wrong. Please try again.");
    }

    setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 sec
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-[#ff6636] mr-3"></div>
        <h2 className="text-3xl font-bold text-gray-800">Add New Course</h2>
      </div>

      {successMessage && (
        <div className={`mb-6 p-4 rounded-md font-medium flex items-center ${
          successMessage.includes("✅") 
            ? "bg-green-50 text-green-700 border border-green-200" 
            : "bg-red-50 text-red-700 border border-red-200"
        }`}>
          <span className="text-xl mr-2">{successMessage.includes("✅") ? "✅" : "❌"}</span>
          <span>{successMessage.replace(/[✅❌]\s/, "")}</span>
        </div>
      )}

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: "",
          grade: "",
          thumbnail: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Course Title</label>
              <Field
                name="title"
                placeholder="Enter course title (without grade)"
                className={`w-full border ${errors.title && touched.title ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition`}
              />
              <ErrorMessage name="title" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <Field
                as="textarea"
                name="description"
                rows="4"
                placeholder="Provide a detailed course description"
                className={`w-full border ${errors.description && touched.description ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition`}
              />
              <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <Field
                    name="price"
                    placeholder="0.00"
                    type="number"
                    step="0.01"
                    className={`w-full border ${errors.price && touched.price ? 'border-red-500' : 'border-gray-300'} p-3 pl-8 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition`}
                  />
                </div>
                <ErrorMessage name="price" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <Field
                  as="select"
                  name="category"
                  className={`w-full border ${errors.category && touched.category ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition appearance-none bg-white`}
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subj) => (
                    <option key={subj.id} value={subj.name}>
                      {subj.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Grade Level</label>
                <Field
                  as="select"
                  name="grade"
                  className={`w-full border ${errors.grade && touched.grade ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition appearance-none bg-white`}
                >
                  <option value="">Select Grade</option>
                  {grades.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="grade" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
                <Field
                  name="thumbnail"
                  placeholder="https://example.com/image.jpg"
                  className={`w-full border ${errors.thumbnail && touched.thumbnail ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md focus:ring-2 focus:ring-[#ff6636] focus:border-transparent outline-none transition`}
                />
                <ErrorMessage name="thumbnail" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#ff6636] text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-300 font-medium text-lg shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">Add Course</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}