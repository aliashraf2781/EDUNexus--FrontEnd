import React, { useState, useEffect, use } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users"); 
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); 
  }, []);

  // Validation Schema using Yup
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    role: Yup.string()
      .oneOf(["instructor", "student", "organization"], "Please select a role")
      .required("Role is required"),
  });

  // Handle user login and check if user exists in FakeAPI
  const handleLogin = async (values) => {
    const { email, password } = values;

    // Check if the user exists
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setError(""); // Clear any previous error
      console.log("User logged in:", user); 
      navigate(""); // Redirect to home page on successful login
      // You can proceed to your next step, e.g., redirect user
    } else {
      setError("Invalid email or password!"); // Display error if user is not found
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-12">
        <h1 className="text-3xl font-bold text-primary mb-7">Community</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-dark">
          Login to your Account
        </h2>

        {/* Display Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
            role: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin} // Call handleLogin on form submit
        >
          {({ errors, touched }) => (
            <Form className="space-y-5 w-full max-w-sm">
              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-light" size={20} />
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
                <Lock className="absolute left-3 top-3.5 text-light" size={20} />
                <Field
                  type={showPassword ? "text" : "password"}
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
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-3.5 text-light cursor-pointer"
                    size={20}
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Role Selection - Radio Buttons */}
              <div className="flex items-center justify-between text-sm text-dark">
                <label className="flex items-center gap-2">
                  <Field type="radio" name="role" value="instructor" />
                  Instructor
                </label>
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm text-dark">
                <label className="flex items-center gap-2">
                  <Field type="checkbox" name="remember" className="accent-primary" />
                  Remember me
                </label>
                <a href="#" className="text-indigo-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:brightness-90 transition"
              >
                LOG IN
              </button>

              {/* Create Account */}
              <p className="text-sm text-center text-dark">
                Don't have an account?{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Create an account
                </a>
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 text-sm text-light">
                <div className="h-px flex-1 bg-secondary"></div>
                OR
                <div className="h-px flex-1 bg-secondary"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="w-full border border-secondary py-2 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center py-12">
        <img
          src="./Login.png"
          alt="Login Illustration"
          className="w-3/4 h-3/4 object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Login;
