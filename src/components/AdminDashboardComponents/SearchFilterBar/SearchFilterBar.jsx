export default function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or email"
        className="p-2 border border-gray-300 rounded-md w-1/2"
      />

      {/* Filter Buttons */}
      <div className="flex gap-2">
        {["all", "Active", "Pending", "Deactivated"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded ${
                filterStatus === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>
    </div>
  );
}
