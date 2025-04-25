import { useState } from 'react';
import InsQuizModal from './InsQuizModalEdit';

export default function InsQuizCard() {
 const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#CA8765]/15 p-4 rounded-lg shadow-sm relative">
      <div className="absolute top-2 left-2 text-xs bg-white px-2 py-1 rounded shadow">9 min</div>
      <div className="absolute top-2 right-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded cursor-pointer hover:bg-blue-200"   onClick={() => setModalOpen(true)}>Edit</div>
      <div className="mt-10 bg-[#FFC3B0]/97 p-2 rounded-sm">
        <p className="text-sm text-gray-700 font-semibold">Quiz Title</p>
      </div>

      <InsQuizModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}