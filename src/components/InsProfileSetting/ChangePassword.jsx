import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="flex items-center justify-center rounded-xl shadow-md w-full h-116 mx-auto bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full h-full" >
        <h2 className="text-lg font-semibold mb-6">Change password</h2>

        <div className="relative mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type={showPassword.current ? 'text' : 'password'}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            onClick={() => togglePassword('current')}
            className="absolute top-9 right-3 text-gray-500"
          >
            {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type={showPassword.new ? 'text' : 'password'}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            onClick={() => togglePassword('new')}
            className="absolute top-9 right-3 text-gray-500"
          >
            {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type={showPassword.confirm ? 'text' : 'password'}
            placeholder="Confirm new password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => togglePassword('confirm')}
            className="absolute top-9 right-3 text-gray-500"
          >
            {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

    
        <button
          type="button"
          className="w-full bg-[#FF6636] text-white font-semibold py-2 rounded-md transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
