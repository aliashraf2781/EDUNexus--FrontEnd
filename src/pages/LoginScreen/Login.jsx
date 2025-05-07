import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "../../services/apiSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password }).unwrap();
      if (res.user.role == "student") {
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.user.role);
        setError("");
        navigate("/student-dashboard");
      } else {
        setError("Wrong Role , you aren't student");
      }
      console.log("Login Successfully", res);
    } catch (err) {
      console.log(err);
      setError("Login Failed : email or password may be incorrect");
    }
  };

  // Form validation schema using Yup
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address") // Email validation
      .required("Email is required"), // Email is a required field
    password: Yup.string()
      .min(6, "Password must be at least 6 characters") // Password must have a minimum length
      .required("Password is required"), // Password is a required field
    role: Yup.string()
      .oneOf(["instructor", "student", "organization"], "Please select a role") // Role must be one of the specified values
      .required("Role is required"), // Role is a required field
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-12">
        <h1 className="text-3xl font-bold text-primary mb-7">Community</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-dark">
          Login to your Account
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}{" "}
        {/* Show error if exists */}
        <Formik
          initialValues={{ email: "", password: "", remember: false, role: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin} // Handle form submission
        >
          {({ errors, touched }) => (
            <Form className="space-y-5 w-full max-w-sm">
              {/* Email Field */}
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`pl-10 pr-4 py-2 w-full border ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md outline-none focus:ring-2 focus:ring-primary`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
                <Field
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  name="password"
                  placeholder="Password"
                  className={`pl-10 pr-10 py-2 w-full border ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-secondary"
                  } rounded-md outline-none focus:ring-2 focus:ring-primary`}
                />
                {showPassword ? (
                  <Eye
                    className="absolute right-3 top-3.5 text-light cursor-pointer"
                    size={20}
                    onClick={() => setShowPassword(false)} // Hide password
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-3.5 text-light cursor-pointer"
                    size={20}
                    onClick={() => setShowPassword(true)} // Show password
                  />
                )}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Role Selection */}
              <div className="flex flex-col gap-2 text-sm text-dark">
                <div className="flex items-center gap-4">
                  {/* <label className="flex items-center gap-2">
                    <Field type="radio" name="role" value="instructor" />
                    Instructor
                  </label> */}

                  <label className="flex items-center gap-2">
                    <Field type="radio" name="role" value="student" />
                    Student
                  </label>
                  <label className="flex items-center gap-2">
                    <Field type="radio" name="role" value="organization" />
                    Organization
                  </label>
                </div>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between text-sm text-dark">
                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="accent-primary"
                  />
                  Remember me
                </label>
                {/* <Link
                  to="/forgot-password"
                  className="text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </Link> */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:brightness-90 transition"
              >
                 {isLoading ? (
                  <>
                    <div className="flex justify-center gap-2">
                      <Loader2 className="animate-spin text-gray-500" /> Logging
                      in ...
                    </div>
                  </>
                ) : (
                  "Log In"
                )}
              </button>

              {/* Create Account Link */}
              <p className="text-sm text-center text-dark">
                Don't have an account?{" "}
                <Link to="/signup" className="text-indigo-500 hover:underline">
                  Create an account
                </Link>
              </p>
              <p className="text-sm text-center text-dark">
                Are you an instructor?{" "}
                <Link
                  to="/instructorLogIn"
                  className="text-indigo-500 hover:underline"
                >
                  Log In Now!
                </Link>
              </p>

              {/* Divider */}
              {/* <div className="flex items-center justify-center gap-2 text-sm text-light">
                <div className="h-px flex-1 bg-secondary"></div>
                OR
                <div className="h-px flex-1 bg-secondary"></div>
              </div> */}

              {/* Google Auth Button */}
              {/* <button
                type="button"
                className="w-full border border-secondary py-2 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button> */}
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center py-12">
        <img
          src="/Login.png" // Make sure the image is inside the public folder
          alt="Login Illustration"
          className="w-3/4 h-3/4 object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Login;
