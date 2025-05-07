import { User, Mail, Lock } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation

export default function SignupPage() {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  // Define validation schema using Yup
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  // Handle signup form submission
  const handleSignup = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        const newUser = await response.json();
        console.log("User created:", newUser);
        alert("Account created successfully!");

        // ✅ Redirect to the dashboard after successful signup
        navigate("/"); 
      } else {
        alert("Error creating account.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen w-full">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-12">
        <h2 className="text-2xl font-semibold mb-6 w-full text-center text-dark">
          Create your account
        </h2>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup} // ✅ Handle form submission
        >
          {({ errors, touched }) => (
            <Form className="space-y-4 w-full max-w-sm">
              {/* Username Field */}
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-light" size={20} />
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className={`pl-10 pr-4 py-2 w-full border ${errors.username && touched.username ? 'border-red-500' : 'border-secondary'} rounded-md outline-none focus:ring-2 focus:ring-primary`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-light" size={20} />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`pl-10 pr-4 py-2 w-full border ${errors.email && touched.email ? 'border-red-500' : 'border-secondary'} rounded-md outline-none focus:ring-2 focus:ring-primary`}
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`pl-10 pr-4 py-2 w-full border ${errors.password && touched.password ? 'border-red-500' : 'border-secondary'} rounded-md outline-none focus:ring-2 focus:ring-primary`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password Field */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-light" size={20} />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`pl-10 pr-4 py-2 w-full border ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-secondary'} rounded-md outline-none focus:ring-2 focus:ring-primary`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2 text-sm">
                <Field type="checkbox" name="terms" id="terms" className="accent-primary" />
                <label htmlFor="terms" className="text-dark">
                  Accept <a href="#" className="text-primary underline">terms and conditions</a>
                </label>
              </div>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              {/* Submit Button */}
              <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:brightness-90">
                SIGN UP
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-dark">
                You have an account? <a href="#" className="text-primary font-medium">Login now</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center">
        <img
          src="/signup.png"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
