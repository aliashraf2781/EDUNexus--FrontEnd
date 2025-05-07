export default function StatsCard({ label, count, color = "blue" }) {
  const colorMap = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    yellow: "text-yellow-600 bg-yellow-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <div className={`rounded p-4 ${colorMap[color]} shadow-sm`}>
      <h4 className="text-md">{label}</h4>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
