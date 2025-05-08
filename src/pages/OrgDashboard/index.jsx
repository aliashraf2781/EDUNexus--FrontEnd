import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

// بيانات وهمية للعرض
const instructorStudents = [
  { id: 1, name: "Aziz Sadiqi" },
  { id: 2, name: "Emran Ahmad" },
  { id: 3, name: "Amid Mahmoud" },
  { id: 4, name: "Dalia Mustafa" },
  { id: 5, name: "Suhada Adel" },
  { id: 6, name: "Ghada Abdullah" },
  { id: 7, name: "Walid Abou" },
];

const level1Students = [...instructorStudents];
const level2Students = [...instructorStudents];

export default function RolesPage() {
  const [instructorsExpanded, setInstructorsExpanded] = useState(true);
  const [studentsExpanded, setStudentsExpanded] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* قسم أدوار المدربين */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-gray-700 font-medium">
            <span className="bg-gray-200 p-1 rounded-md mr-2">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
              </svg>
            </span>
            <span className="mr-1">Instructor Roles</span>
          </div>
          <button
            className="text-blue-500 text-sm mx-2"
            onClick={() => setInstructorsExpanded(!instructorsExpanded)}
          >
            {instructorsExpanded ? "view all" : "view all"}
          </button>
          {instructorsExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>

        {instructorsExpanded && (
          <div className="flex flex-wrap gap-4">
            {/* قسم المدرس الأول */}
            <div className="bg-white rounded-lg shadow-sm p-4 w-full md:w-[calc(50%-8px)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="bg-gray-200 p-1 rounded-md mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                    </svg>
                  </span>
                  <span>Arabic Teacher</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Options</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <div className="border-b border-gray-200 pb-2 mb-2 flex">
                <div className="flex-1 font-medium text-sm">Students Name</div>
                <div className="w-24 text-center"></div>
                <div className="w-24 text-center"></div>
              </div>

              {instructorStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center py-2 border-b border-gray-100"
                >
                  <div className="flex-1 text-sm">{student.name}</div>
                  <div className="w-24 px-1">
                    <button className="bg-orange-500 text-white text-xs rounded-md py-1 px-3 w-full">
                      جدول
                    </button>
                  </div>
                  <div className="w-24 px-1">
                    <button className="bg-teal-600 text-white text-xs rounded-md py-1 px-3 w-full">
                      كشف
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* قسم المدرس الثاني (نسخة مكررة) */}
            <div className="bg-white rounded-lg shadow-sm p-4 w-full md:w-[calc(50%-8px)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="bg-gray-200 p-1 rounded-md mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                    </svg>
                  </span>
                  <span>Arabic Teacher</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Options</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <div className="border-b border-gray-200 pb-2 mb-2 flex">
                <div className="flex-1 font-medium text-sm">Students Name</div>
                <div className="w-24 text-center"></div>
                <div className="w-24 text-center"></div>
              </div>

              {instructorStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center py-2 border-b border-gray-100"
                >
                  <div className="flex-1 text-sm">{student.name}</div>
                  <div className="w-24 px-1">
                    <button className="bg-orange-500 text-white text-xs rounded-md py-1 px-3 w-full">
                      جدول
                    </button>
                  </div>
                  <div className="w-24 px-1">
                    <button className="bg-teal-600 text-white text-xs rounded-md py-1 px-3 w-full">
                      كشف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* قسم أدوار الطلاب */}
      <div>
        <div className="flex items-center mb-2">
          <div className="flex items-center text-gray-700 font-medium">
            <span className="bg-gray-200 p-1 rounded-md mr-2">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
              </svg>
            </span>
            <span className="mr-1">Student Roles</span>
          </div>
          <button
            className="text-blue-500 text-sm mx-2"
            onClick={() => setStudentsExpanded(!studentsExpanded)}
          >
            {studentsExpanded ? "view all" : "view all"}
          </button>
          {studentsExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>

        {studentsExpanded && (
          <div className="flex flex-wrap gap-4">
            {/* قسم طلاب المستوى الثاني */}
            <div className="bg-white rounded-lg shadow-sm p-4 w-full md:w-[calc(50%-8px)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="bg-gray-200 p-1 rounded-md mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                    </svg>
                  </span>
                  <span>Level 2 Students</span>
                </div>
                <div className="flex items-center">
                  <button className="text-blue-500 text-sm mr-2">
                    view all
                  </button>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Options</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-2 mb-2 flex">
                <div className="flex-1 font-medium text-sm">Students Name</div>
                <div className="w-24 text-center"></div>
                <div className="w-24 text-center"></div>
              </div>

              {level2Students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center py-2 border-b border-gray-100"
                >
                  <div className="flex-1 text-sm">{student.name}</div>
                  <div className="w-24 px-1">
                    <button className="bg-orange-500 text-white text-xs rounded-md py-1 px-3 w-full">
                      جدول
                    </button>
                  </div>
                  <div className="w-24 px-1">
                    <button className="bg-teal-600 text-white text-xs rounded-md py-1 px-3 w-full">
                      كشف
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* قسم طلاب المستوى الأول */}
            <div className="bg-white rounded-lg shadow-sm p-4 w-full md:w-[calc(50%-8px)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="bg-gray-200 p-1 rounded-md mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                    </svg>
                  </span>
                  <span>Level 1 Students</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Options</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <div className="border-b border-gray-200 pb-2 mb-2 flex">
                <div className="flex-1 font-medium text-sm">Students Name</div>
                <div className="w-24 text-center"></div>
                <div className="w-24 text-center"></div>
              </div>

              {level1Students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center py-2 border-b border-gray-100"
                >
                  <div className="flex-1 text-sm">{student.name}</div>
                  <div className="w-24 px-1">
                    <button className="bg-orange-500 text-white text-xs rounded-md py-1 px-3 w-full">
                      جدول
                    </button>
                  </div>
                  <div className="w-24 px-1">
                    <button className="bg-teal-600 text-white text-xs rounded-md py-1 px-3 w-full">
                      كشف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
