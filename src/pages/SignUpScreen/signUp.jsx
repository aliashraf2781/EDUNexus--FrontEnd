import { User, Mail, Lock } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-20">
        <h2 className="text-2xl font-semibold mb-6 w-full text-center text-dark">
          Create your account
        </h2>

        <div className="space-y-4 w-full max-w-sm">
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-light" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 pr-4 py-2 w-full border border-secondary rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

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
              className="pl-10 pr-4 py-2 w-full border border-secondary rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-light" size={20} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="pl-10 pr-4 py-2 w-full border border-secondary rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="terms" className="accent-primary" />
            <label htmlFor="terms" className="text-dark">
              Accept <a href="#" className="text-primary underline">terms and conditions</a>
            </label>
          </div>

          <button className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:brightness-90">
            SIGN UP
          </button>

          <p className="text-center text-sm text-dark">
            You have account? <a href="#" className="text-primary font-medium">Login now</a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-primary flex items-center justify-center">
        <img
          src="/signup.png"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
