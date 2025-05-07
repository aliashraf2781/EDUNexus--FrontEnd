import {
  User,
  Mail,
  Globe,
  Image as ImageIcon,
  BookOpenText,
  FileText,
  Lock,
} from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useRegisterMutation } from "../../services/apiSlice";
import { useState } from "react";

export default function RegisterInstructor() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const initialValues = {
    name: "",
    title: "",
    email: "",
    password: "", // ✅ Added password
    image: "",
    description: "",
    website: "",
    driveLink: "",
    status: "pending",
    role: "instructor",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    title: Yup.string().required("Title is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"), // ✅ Added password validation
    image: Yup.string().url("Invalid image URL").required("Image is required"),
    description: Yup.string()
      .min(10, "Bio must be at least 10 characters")
      .required("Bio is required"),
    website: Yup.string()
      .url("Invalid URL")
      .required("LinkedIn URL is required"),
    driveLink: Yup.string()
      .url("Invalid Google Drive link")
      .required("Drive link is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await register(values).unwrap();
      resetForm();
      navigate("/application-review");
      setError("");
    } catch (err) {
      console.log("Error Registering", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen w-full">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-12">
        <h2 className="text-2xl font-semibold mb-6 w-full text-center text-dark">
          Register as an Instructor
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4 w-full max-w-md">
              {/* Name */}
              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="name"
                  placeholder="Full Name"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Title */}
              <div className="relative">
                <BookOpenText
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="title"
                  placeholder="Professional Title"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.title && touched.title
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Image URL */}
              <div className="relative">
                <ImageIcon
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="image"
                  placeholder="Profile Image URL"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.image && touched.image
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Bio */}
              <div className="relative">
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Bio"
                  rows="4"
                  className={`p-2 w-full border ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md resize-none`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* LinkedIn */}
              <div className="relative">
                <Globe
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="website"
                  placeholder="LinkedIn Profile URL"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.website && touched.website
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Drive Link */}
              <div className="relative">
                <FileText
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  name="driveLink"
                  placeholder="Google Drive Link (CV & Video)"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.driveLink && touched.driveLink
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md`}
                />
                <ErrorMessage
                  name="driveLink"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:brightness-90"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-full h-dvh lg:w-1/2 bg-primary flex items-center justify-center">
        <img
          src="/signup.png"
          alt="Register Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
