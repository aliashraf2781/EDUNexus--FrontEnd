import { useState, useEffect } from "react";

export default function InstructorModal({
  show,
  setShow,
  addInstructor,
  editInstructor,
  instructor,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (instructor) {
      setName(instructor.name);
      setEmail(instructor.email);
      setStatus(instructor.status);
    }
  }, [instructor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (instructor) {
      // Edit instructor
      editInstructor({ ...instructor, name, email, status });
    } else {
      // Add new instructor
      addInstructor({
        id: Date.now(),
        name,
        email,
        status,
      });
    }
    setShow(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          {instructor ? "Edit Instructor" : "Add Instructor"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block mb-2 text-sm">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="pending">Pending</option>
             
              <option value="deactivated">Deactivated</option>
              <option value="active">Active</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              {instructor ? "Save Changes" : "Add Instructor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
