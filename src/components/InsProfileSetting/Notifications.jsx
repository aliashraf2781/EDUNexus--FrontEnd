import React, { useState } from "react";

const Notifications = () => {
  const options = [
    "I want to know who buy my course.",
    "I want to know who write a review on my course.",
    "I want to know who commented on my lecture.",
    "I want to know who download my lecture notes.",
    "I want to know who replied on my comment.",
    "I want to know daily how many people visited my profile.",
    "I want to know who download my lecture attach file."
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full h-116 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Notifications</h2>
      <div className="space-y-4">
        {options.map((item, index) => (
          <label
            key={index}
            htmlFor={`notif-${index}`}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <input
                id={`notif-${index}`}
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
                className="peer hidden"
              />
              <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-orange-500 flex items-center justify-center">
                {checkedItems[index] && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-gray-700 text-[15px] leading-6">{item}</span>
          </label>
        ))}
      </div>
      <button className="mt-8 bg-[#FF6636] text-white font-medium text-[15px] px-6 py-3 rounded-md">
        Save Changes
      </button>
    </div>
  );
};

export default Notifications;
