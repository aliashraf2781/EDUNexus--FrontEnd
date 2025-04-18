import { useState } from "react";
import searchIcon from "../../../assets/StdDashboardIcons/MagnifyingGlass.png";
const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Latest");

  const options = ["Latest", "Oldest", "Popular"];
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="w-full sm:w-1/2">
        <label className="block text-xs text-gray-500 mb-1">Search:</label>
        <div className="relative">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-2.5 left-3 w-4 h-4 opacity-60"
          />
          <input
            type="text"
            placeholder="Search in your courses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
        </div>
      </div>
      
      <div className="relative w-40">
        <label className="block text-xs text-gray-500 mb-1 ms-1">
          Sorted by
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left bg-white border border-gray-300 px-4 py-2 rounded-md"
        >
          {selected}
        </button>

        {isOpen && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-pink-200 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
