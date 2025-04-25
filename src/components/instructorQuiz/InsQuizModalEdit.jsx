export default function InsQuizModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/57 bg-opacity-30">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black hover:cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">Quiz Title</h2>
        <input
          type="text"
          placeholder="Please enter the number of the question you want to edit here..."
          className="w-full mb-4 border border-gray-300 rounded p-2"
        />
        <input
          type="text"
          placeholder="Question Text"
          className="w-full mb-4 border border-gray-300 rounded p-2"
        />
        <p className="text-center text-[#FF6636] mb-2">Answer Choices</p>
        {[1, 2, 3, 4].map((num) => (
          <input
            key={num}
            type="text"
            placeholder={`Choice ${num}`}
            className="w-full mb-2 border border-gray-300 rounded p-2 outline-none"
          />
        ))}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="bg-[#FF6636] text-white px-4 py-2 rounded hover:bg-orange-600 hover:cursor-pointer">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}
