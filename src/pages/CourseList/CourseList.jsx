import React, { useEffect, useState } from "react";
import StartSection from "../../components/StartSection/StartSection";
import CourseCard from "../../components/CourseCard/CourseCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import Pagination from "../../components/Pagination/Pagination";
import SideFilterMenu from "../../components/SideFilterMenu/SideFilterMenu";
import { getAllCourses } from "../../api/courses";

function CourseList() {
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  // const [grades, setGrades] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [sortOrder, setSortOrder] = useState("popular");
  const [searchTerm, setSearchTerm] = useState('');
  const subjects = [
    {
      "id": 1,
      "name": "Science"
    },
    {
      "id": 2,
      "name": "Physics"
    },
    {
      "id": 3,
      "name": "Mathematics"
    },
    {
      "id": 4,
      "name": "English"
    },
    {
      "id": 5,
      "name": "Psychology and Sociology"
    },
    {
      "id": 7,
      "name": "Chemistry"
    },
    {
      "id": 8,
      "name": "Biology"
    },
    {
      "id": 11,
      "name": "History"
    },
  ]
  const grades = [
    {
      "id": 1,
      "name": "Grade 1"
    },
    {
      "id": 2,
      "name": "Grade 2"
    },
    {
      "id": 3,
      "name": "Grade 3"
    },
    {
      "id": 4,
      "name": "Grade 4"
    },
    {
      "id": 5,
      "name": "Grade 5"
    },
    {
      "id": 6,
      "name": "Grade 6"
    },
    {
      "id": 7,
      "name": "Grade 7"
    },
    {
      "id": 8,
      "name": "Grade 8"
    },
    {
      "id": 9,
      "name": "Grade 9"
    },
    {
      "id": 10,
      "name": "Grade 10"
    },
    {
      "id": 11,
      "name": "Grade 11"
    },
    {
      "id": 12,
      "name": "Grade 12"
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      const allCourses = await getAllCourses();
      setCourses(allCourses.data);
      // const allSubjects = await getAllSubjects();
      // setSubjects(allSubjects.data);
      // const allGrades = await getAllGrades();
      // setGrades(allGrades.data);
    };
    fetchData();
  }, []);

  const extractGrade = (title) => {
    const match = title.match(/(?:grade|gr)\s*(\d+)/i);
    return match[0];
  }

  const coursesWithGrades = courses.map((course) => ({
    ...course,
    grade: extractGrade(course.title),
  }));

  useEffect(() => {
    console.log("Selected Grade:", selectedGrade);
    console.log("Selected Subject:", selectedSubject);
  }, [selectedGrade, selectedSubject]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(coursesWithGrades);
  const filteredCourses = coursesWithGrades.filter(course => {
    const matchesGrade = selectedGrade ? course.grade == selectedGrade : true;
    const matchesSubject = selectedSubject ? course.category == selectedSubject : true;
    return matchesGrade && matchesSubject;
  });

  const searchedCourses = filteredCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;

  const sortedCourses = [...searchedCourses].sort((a, b) => {
    if (sortOrder === "popular") {
      return b.enrolledStudents.length - a.enrolledStudents.length;
    } else if (sortOrder === "newest") {
      return indexOfLastCourse - indexOfFirstCourse;
    } else if (sortOrder === "oldest") {
      return indexOfFirstCourse - indexOfLastCourse;
    }
    return 0;
  });

  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);

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
                <CourseCard key={course.id} course={course}/>
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

export default CourseList
