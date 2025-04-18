import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Trophy, Star, CheckCircle } from "lucide-react";

const progressData = [
  { week: 0, user: 100, avg: 50 },
  { week: 2, user: 250, avg: 150 },
  { week: 4, user: 400, avg: 300 },
  { week: 6, user: 600, avg: 450 },
  { week: 8, user: 780, avg: 500 },
];

export default function StdLeaderboard() {
  return (
    <div className="w-full mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 text-[#1e1e1e] text-sm">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-semibold text-[#FF6636]">My Progress</h1>
        <p className="text-gray-500 text-sm">
          See how you rank among other learners
        </p>
      </div>

      <div className="bg-[#f7f8fa] p-4 rounded-lg flex items-center space-x-4">
        <div className="flex flex-col items-center text-orange-500">
          <Trophy size={60} />
          <span className="text-xs text-gray-600 mt-1">You</span>
        </div>

        <div className="space-y-1">
          <p className="font-medium">
            Rank: <span className="font-bold">5th</span> out of 30
          </p>
          <p>
            Points: <strong>780 XP</strong>
          </p>
          <p>
            Level:{" "}
            <span className="text-[#FF6636] font-medium">Advanced Learner</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-[#f7f8fa] p-4 rounded-lg space-y-2">
          <p className="font-medium mb-1">Nearby competitors</p>
          <div className="flex justify-between">
            <span>Salma</span>
            <span>790</span>
          </div>
          <div className="flex justify-between font-semibold text-[#FF6636]">
            <span>You</span>
            <span>780</span>
          </div>
          <div className="flex justify-between">
            <span>Mostafa</span>
            <span>770</span>
          </div>
        </div>

        <div className="flex-1 bg-[#f7f8fa] p-4 rounded-lg space-y-2">
          <p className="font-medium mb-1">Achievements</p>
          <div className="flex items-center space-x-2 text-gray-700">
            <CheckCircle size={18} className="text-green-600" />
            <span>Completed 10 Quizzes</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Star size={18} className="text-yellow-500" />
            <span>Top 10 Rank for 2 weeks</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-medium">Weekly progress</p>

          <div className="flex space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-1.5 bg-[#FF6636] rounded-sm" />
              <span className="text-gray-600">Your Progress</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-1.5 bg-gray-300 rounded-sm" />
              <span className="text-gray-600">Class Average</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={progressData}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="user"
              stroke="#FF6636"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Your Progress"
            />
            <Line
              type="monotone"
              dataKey="avg"
              stroke="#d1d5db"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Class Average"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center text-gray-600 text-sm">
        You’re just <strong>10 points</strong> away from 4th place!
        <br />
        <span className="text-[#FF6636] font-medium">
          Complete one more quiz to level up!
        </span>
      </div>
    </div>
  );
}
