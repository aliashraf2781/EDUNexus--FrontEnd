export default function ConfirmDeleteModal({
  show,
  setShow,
  deleteInstructor,
  deletingInstructorId,
}) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this instructor?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShow(false)}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteInstructor(deletingInstructorId)}
            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
