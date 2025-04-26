import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

// Course data for different courses
const courseData = {
  "web-fundamentals": {
    title: "Web Fundamentals",
    totalStudents: 157,
    totalStudentsTrend: "↑ 12%",
    averageScore: 78,
    averageScoreTrend: "↑ 5%",
    completionRate: 64,
    completionRateTrend: "↓ 3%",
    engagement: [
      { day: "Mon", students: 42 },
      { day: "Tue", students: 53 },
      { day: "Wed", students: 62 },
      { day: "Thu", students: 48 },
      { day: "Fri", students: 55 },
      { day: "Sat", students: 27 },
      { day: "Sun", students: 18 },
    ],
    atRiskStudents: 5,
    pendingAssignments: 12,
  },
  "javascript-advanced": {
    title: "JavaScript Advanced",
    totalStudents: 93,
    totalStudentsTrend: "↑ 8%",
    averageScore: 72,
    averageScoreTrend: "↓ 2%",
    completionRate: 58,
    completionRateTrend: "↑ 4%",
    engagement: [
      { day: "Mon", students: 31 },
      { day: "Tue", students: 38 },
      { day: "Wed", students: 45 },
      { day: "Thu", students: 39 },
      { day: "Fri", students: 34 },
      { day: "Sat", students: 16 },
      { day: "Sun", students: 13 },
    ],
    atRiskStudents: 9,
    pendingAssignments: 7,
  },
  "react-basics": {
    title: "React Basics",
    totalStudents: 124,
    totalStudentsTrend: "↑ 17%",
    averageScore: 83,
    averageScoreTrend: "↑ 6%",
    completionRate: 72,
    completionRateTrend: "↑ 8%",
    engagement: [
      { day: "Mon", students: 35 },
      { day: "Tue", students: 46 },
      { day: "Wed", students: 58 },
      { day: "Thu", students: 51 },
      { day: "Fri", students: 49 },
      { day: "Sat", students: 32 },
      { day: "Sun", students: 22 },
    ],
    atRiskStudents: 3,
    pendingAssignments: 15,
  },
  "node-backend": {
    title: "Node.js Backend",
    totalStudents: 76,
    totalStudentsTrend: "↓ 4%",
    averageScore: 68,
    averageScoreTrend: "↑ 3%",
    completionRate: 51,
    completionRateTrend: "↓ 7%",
    engagement: [
      { day: "Mon", students: 22 },
      { day: "Tue", students: 28 },
      { day: "Wed", students: 32 },
      { day: "Thu", students: 24 },
      { day: "Fri", students: 18 },
      { day: "Sat", students: 14 },
      { day: "Sun", students: 10 },
    ],
    atRiskStudents: 14,
    pendingAssignments: 9,
  },
};

function StudentEngagementChart({ data }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={20}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`${value} students`, "Active"]} />
          <Bar dataKey="students" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function CourseOverviewComponent() {
  const [selectedCourse, setSelectedCourse] = useState("web-fundamentals");
  const currentCourse = courseData[selectedCourse];

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="flex flex-col flex-1 gap-4 px-5 py-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between">
        <h3 className="font-semibold">Course Performance</h3>
        <select
          name="courseSelect"
          id="courseSelect"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="mt-0.5 rounded text-sm border-gray-200"
        >
          <option value="web-fundamentals">Web Fundamentals</option>
          <option value="javascript-advanced">JavaScript Advanced</option>
          <option value="react-basics">React Basics</option>
          <option value="node-backend">Node.js Backend</option>
        </select>
      </div>
      <hr className="text-gray-200 -mx-5" />

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-indigo-800 text-sm font-medium">Total Students</p>
          <p className="text-2xl font-bold">{currentCourse.totalStudents}</p>
          <p className="text-indigo-600 text-xs mt-1">
            {currentCourse.totalStudentsTrend} from last month
          </p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-green-800 text-sm font-medium">Average Score</p>
          <p className="text-2xl font-bold">{currentCourse.averageScore}%</p>
          <p className="text-green-600 text-xs mt-1">
            {currentCourse.averageScoreTrend} from last month
          </p>
        </div>
        <div className="bg-amber-50 p-3 rounded-lg">
          <p className="text-amber-800 text-sm font-medium">Completion Rate</p>
          <p className="text-2xl font-bold">{currentCourse.completionRate}%</p>
          <p className="text-amber-600 text-xs mt-1">
            {currentCourse.completionRateTrend} from last month
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Daily Student Engagement</h4>
        <StudentEngagementChart data={currentCourse.engagement} />
      </div>

      <div className="mt-2">
        <h4 className="font-medium mb-2">Attention Required</h4>
        <div className="space-y-2">
          <div className="bg-red-50 p-3 rounded-md">
            <div className="flex justify-between">
              <span className="font-medium">
                {currentCourse.atRiskStudents} students
              </span>
              <span className="text-red-600 text-sm">&lt;50% completion</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Students at risk of dropping out
            </p>
          </div>
          <div className="bg-amber-50 p-3 rounded-md">
            <div className="flex justify-between">
              <span className="font-medium">
                {currentCourse.pendingAssignments} assignments
              </span>
              <span className="text-amber-600 text-sm">Need grading</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Pending for more than 3 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
