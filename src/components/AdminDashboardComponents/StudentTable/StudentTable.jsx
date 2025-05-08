export default function StudentTable({
  students,
  updateStatus,
  setDeletingStudentId,
  setShowDeleteModal,
}) {
  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Manage Students</h3>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4 capitalize">{student.status}</td>
              <td className="py-2 px-4">
                <div className="flex gap-2 flex-wrap">
                  <a
                    target="_blank"
                    href={`mailto:${
                      student.email
                    }?subject=Hello%20${encodeURIComponent(
                      student.name
                    )}&body=Dear%20${encodeURIComponent(
                      student.name
                    )}%2C%0D%0A%0D%0A`}
                    className="px-3 py-2 text-green-600 ring-1 ring-green-500 bg-green-50 font-semibold hover:bg-green-100 hover:shadow-sm hover:ring-green-600 hover:ring rounded w-max"
                    rel="noopener noreferrer"
                  >
                    Send Email
                  </a>

                  <button
                    onClick={() => {
                      setDeletingStudentId(student._id);
                      setShowDeleteModal(true);
                    }}
                    className="px-3 py-2 text-red-600 bg-red-50 ring-1 ring-red-500 font-semibold hover:ring-current hover:bg-red-100 hover:shadow-sm rounded"
                  >
                    Delete
                  </button>

                  {["active", "pending", "deactivated"].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={(e) => {
                        e.preventDefault();
                        updateStatus(student._id, status);
                      }}
                      className={`px-2 py-1 rounded font-bold ${
                        student.status === status
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
