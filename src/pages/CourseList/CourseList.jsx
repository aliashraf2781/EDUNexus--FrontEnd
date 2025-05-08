import React, { useEffect, useState } from "react";
import StartSection from "../../components/StartSection/StartSection";
import CourseCard from "../../components/CourseCard/CourseCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import Pagination from "../../components/Pagination/Pagination";
import SideFilterMenu from "../../components/SideFilterMenu/SideFilterMenu";
import { getAllCourses, getAllSubjects, getAllGrades } from "../../api/courses";
import { useGetAllCoursesQuery } from "../../services/apiSlice";
const gradesInitialValue = [
  {
    id: "1",
    name: "Grade 1",
  },
  {
    id: "2",
    name: "Grade 2",
  },
  {
    id: "3",
    name: "Grade 3",
  },
  {
    id: "4",
    name: "Grade 4",
  },
  {
    id: "5",
    name: "Grade 5",
  },
  {
    id: "6",
    name: "Grade 6",
  },
  {
    id: "7",
    name: "Grade 7",
  },
  {
    id: "8",
    name: "Grade 8",
  },
  {
    id: "9",
    name: "Grade 9",
  },
  {
    id: "10",
    name: "Grade 10",
  },
  {
    id: "11",
    name: "Grade 11",
  },
  {
    id: "12",
    name: "Grade 12",
  },
];
const subjectsInitialValue = [
  {
    id: "1",
    name: "Arabic Language",
  },
  {
    id: "2",
    name: "Mathematics",
  },
  {
    id: "3",
    name: "Science",
  },
  {
    id: "4",
    name: "English Language",
  },
  {
    id: "5",
    name: "Social Studies",
  },
  {
    id: "6",
    name: "Physics",
  },
  {
    id: "7",
    name: "Chemistry",
  },
  {
    id: "8",
    name: "Biology",
  },
  {
    id: "9",
    name: "Philosophy and Logic",
  },
  {
    id: "10",
    name: "Psychology and Sociology",
  },
  {
    id: "11",
    name: "History",
  },
  {
    id: "12",
    name: "Geography",
  },
  {
    id: "13",
    name: "Computer Science",
  },
];
function CourseList() {
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState(subjectsInitialValue);
  const [grades, setGrades] = useState(gradesInitialValue);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [sortOrder, setSortOrder] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useGetAllCoursesQuery();
  console.log(data)
  useEffect(() => {
    console.log("Selected Grade:", selectedGrade);
    console.log("Selected Subject:", selectedSubject);
  }, [selectedGrade, selectedSubject]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredCourses = courses.filter((course) => {
    const matchesGrade = selectedGrade ? course.grade == selectedGrade : true;
    const matchesSubject = selectedSubject
      ? course.subject_id == selectedSubject
      : true;
    return matchesGrade && matchesSubject;
  });

  const searchedCourses = filteredCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortDescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      course.longDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCourses = [...searchedCourses].sort((a, b) => {
    if (sortOrder === "popular") {
      return b.students - a.students;
    } else if (sortOrder === "newest") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else if (sortOrder === "oldest") {
      return new Date(a.created_at) - new Date(b.created_at);
    }
    return 0;
  });

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = sortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <div className="w-vw min-h-lvh lg:py-8 py-4 lg:px-15 px-3">
      <div className="mx-auto max-w-6xl px-4 flex flex-col ">
        <StartSection
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          results={currentCourses.length}
          filters={[selectedGrade, selectedSubject].filter(Boolean).length}
          setSortOrder={setSortOrder}
          setSearchTerm={setSearchTerm}
        />
        <div className="grid grid-cols-12 gap-6">
          {showFilters && (
            <div className="lg:col-span-3">
              <div className="hidden lg:block">
                <FilterSection
                  showFilters={showFilters}
                  setShowFilters={setShowFilters}
                  grades={grades}
                  subjects={subjects}
                  selectedGrade={selectedGrade}
                  setSelectedGrade={setSelectedGrade}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                />
              </div>
              <SideFilterMenu
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              >
                <FilterSection
                  showFilters={showFilters}
                  setShowFilters={setShowFilters}
                  grades={grades}
                  subjects={subjects}
                  selectedGrade={selectedGrade}
                  setSelectedGrade={setSelectedGrade}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                />
              </SideFilterMenu>
            </div>
          )}

          <div
            className={`grid col-span-12 
              ${
                showFilters
                  ? "lg:col-span-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
                  : "lg:col-span-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }`}
          >
            <div
              className={`grid col-span-12 gap-4
              ${
                showFilters
                  ? "lg:col-span-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
                  : "lg:col-span-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }`}
            >
              {currentCourses.map((course) => (
                <CourseCard
                  course={course}
                  subject={
                    subjects.find((subject) => subject.id == course.subject_id)
                      ?.name
                  }
                />
              ))}
            </div>
            <div className="col-span-full h-20 flex items-center justify-center mx-2">
              {filteredCourses.length > itemsPerPage && (
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredCourses.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
