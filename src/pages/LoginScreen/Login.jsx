import React from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-20">
        <h1 className="text-3xl font-bold text-[#ff6636] mb-7">Community</h1>
        <h2 className="text-2xl font-semibold mb-6 w-full text-center">
          Login to your Account
        </h2>

        <div className="space-y-4 w-full max-w-sm">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-[#8c94a3]" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 w-full border border-[#ffeee8] rounded-md outline-none focus:ring-2 focus:ring-[#ff6636]"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-[#8c94a3]" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-10 py-2 w-full border border-[#ffeee8] rounded-md outline-none focus:ring-2 focus:ring-[#ff6636]"
            />
            <EyeOff className="absolute right-3 top-3.5 text-[#8c94a3] cursor-pointer" size={20} />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#ff6636]" />
              Remember me
            </label>
            <a href="#" className="text-[#6C63FF] hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-[#ff6636] text-white py-2 rounded-md font-semibold hover:bg-[#e96c41] transition">
            LOG IN
          </button>

          <p className="text-sm text-center">
            Don't have an account?{' '}
            <a href="#" className="text-[#6C63FF] hover:underline">
              Create an account
            </a>
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-[#8c94a3]">
            <div className="h-px flex-1 bg-[#ffeee8]"></div>
            OR
            <div className="h-px flex-1 bg-[#ffeee8]"></div>
          </div>

          <button className="w-full border border-[#ffeee8] py-2 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:bg-[#f8f8f8] transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-[#ff6636] flex items-center justify-center">
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
