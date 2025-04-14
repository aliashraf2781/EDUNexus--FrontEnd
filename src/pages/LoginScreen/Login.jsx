import React from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-20">
        <h1 className="text-3xl font-bold text-primary mb-7">Community</h1>
        <h2 className="text-2xl font-semibold mb-6 w-full text-center text-dark">
          Login to your Account
        </h2>

        <div className="space-y-4 w-full max-w-sm">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-light" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 w-full border border-secondary rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-light" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-10 py-2 w-full border border-secondary rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            <EyeOff className="absolute right-3 top-3.5 text-light cursor-pointer" size={20} />
          </div>

          <div className="flex items-center justify-between text-sm text-dark">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              Remember me
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:brightness-90 transition">
            LOG IN
          </button>

          <p className="text-sm text-center text-dark">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Create an account
            </a>
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-light">
            <div className="h-px flex-1 bg-secondary"></div>
            OR
            <div className="h-px flex-1 bg-secondary"></div>
          </div>

          <button className="w-full border border-secondary py-2 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-primary flex items-center justify-center">
        <img
          src="./Login.png"
          alt="Illustration"
          className="w-3/4 h-3/4 object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Login;
