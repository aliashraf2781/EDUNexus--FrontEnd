import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "../../services/apiSlice";

const InstructorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password }).unwrap();
      if (res.user.role == "instructor") {
        //add status checking and navigating
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.user.role);
        setError("");
        if (res.user.status == "active" || "") {
          navigate("/instructor");
        } else if (res.user.status == "pending") {
          navigate("/application-review");
        } else {
          navigate("/deactivated");
        }
        //
      } else {
        setError("Wrong Role , you aren't instructor");
      }
      console.log("Login Successfully", res);
      console.log(res.user.status);
    } catch (err) {
      console.log(err);
      setError("Login Failed : email or password may be incorrect");
    }
  };

  // const handleLogin = (values) => {
  //   const { email, password } = values;
  //   const role = "instructor"; // Fixed role

  //   const user = users.find(
  //     (user) => user.email === email && user.password === password
  //   );

  //   if (user.status === "Active") {
  //     setError("")
  //     navigate("/instructor", { state: { instructor: user } });
  //   } else if (user.status === "Pending") {
  //     setError("")
  //     navigate("/application-review", { state: { instructor: user } });
  //   } else if (user.status === "Deactivated") {
  //     setError("")
  //     navigate("/deactivated", { state: { instructor: user } });
  //   } else {
  //     setError("Invalid email or password!");
  //   }
  // };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-12">
        <h1 className="text-3xl font-bold text-primary mb-7">
          Instructor Portal
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-dark">
          Login as Instructor
        </h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form className="space-y-5 w-full max-w-sm">
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

              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-light"
                  size={20}
                />
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

              {/* Fixed Role Display */}
              <div className="text-sm text-dark">
                <p className="mb-1 font-medium">Logging in as:</p>
                <label className="flex items-center gap-2 text-gray-500">
                  <Field
                    type="radio"
                    name="role"
                    value="instructor"
                    checked
                    disabled
                  />
                  Instructor
                </label>
              </div>

              <div className="flex items-center justify-between text-sm text-dark">
                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="accent-primary"
                  />
                  Remember me
                </label>
                {/* <Link to="/forgot-password" className="text-indigo-500 hover:underline">
                  Forgot Password?
                </Link> */}
              </div>

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

              <p className="text-sm text-center text-dark">
                Don't have an account?{" "}
                <Link
                  to="/instructorRegister"
                  className="text-indigo-500 hover:underline"
                >
                  Create an account
                </Link>
              </p>

              {/* <div className="flex items-center justify-center gap-2 text-sm text-light">
                <div className="h-px flex-1 bg-secondary"></div>
                OR
                <div className="h-px flex-1 bg-secondary"></div>
              </div>

              <button type="button" className="w-full border border-secondary py-2 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-100 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button> */}
            </Form>
          )}
        </Formik>
      </div>

      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center py-12">
        <img
          src="/Login.png"
          alt="Login Illustration"
          className="w-3/4 h-3/4 object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default InstructorLogin;
