export default function InsQuizLeaderboardToggle() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-700">Leaderboard</h2>
        <a href="#" className="text-xs text-[#FF6636] font-medium hover:underline">See all</a>
      </div>
      <div className="flex w-full rounded-lg bg-orange-100 overflow-hidden text-sm font-medium">
        <button className="w-1/2 bg-[#FF6636] text-white py-1.5">Weekly</button>
        <button className="w-1/2 text-[#FF6636] py-1.5">Monthly</button>
      </div>
    </div>
  );
}
