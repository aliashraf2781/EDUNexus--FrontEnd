import { useState } from 'react';
import searchIcon from '../../assets/StdDashboardIcons/Vector (1).png';
import InsCreateQuizModal from './InsCreateQuizModal';

export default function InsQuizSearchBar() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-[#f9fafe] py-4 pe-4 rounded-lg">
        <div className="relative w-full max-w-7xl">
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
          <input
            type="text"
            placeholder="Search Quiz"
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="ml-4 bg-[#FF6636] text-white px-6 py-2 rounded-lg hover:bg-orange-600 hover:cursor-pointer text-sm whitespace-nowrap"
        >
          Create Quiz
        </button>
      </div>

      <InsCreateQuizModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
