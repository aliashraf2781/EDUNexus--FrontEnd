import { useState } from "react";

const NavigationTabs = () => {
  const tabs = ["Dashboard", "Messages", "Settings"];
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="bg-white border-t border-gray-200 overflow-x-auto">
      <div className="flex justify-center space-x-6 px-6 pt-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm pb-3 transition-all duration-200 cursor-pointer focus:outline-none active:scale-95 ${
              activeTab === tab
                ? "text-gray-800 font-semibold border-b-2 border-orange-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
