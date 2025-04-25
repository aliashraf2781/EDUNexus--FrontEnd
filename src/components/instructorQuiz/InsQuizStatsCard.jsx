export default function InsQuizStatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      <h3 className="text-xl font-semibold mt-2">{value}</h3>
    </div>
  );
}