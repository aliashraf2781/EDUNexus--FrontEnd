import React, { useEffect, useState } from "react";
import StartSection from "../../components/StartSection/StartSection";
import CourseCard from "../../components/CourseCard/CourseCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import Pagination from "../../components/Pagination/Pagination";
import SideFilterMenu from "../../components/SideFilterMenu/SideFilterMenu";
import { getAllCourses, getAllSubjects, getAllGrades, getPrices } from "../../api/courses";

function CourseList() {
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allCourses = await getAllCourses();
      setCourses(allCourses.data);
      const allSubjects = await getAllSubjects();
      setSubjects(allSubjects.data);
      const allGrades = await getAllGrades();
      setGrades(allGrades.data);
      const allPrices = await getPrices();
      setPrices(allPrices.data);
    };
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredCourses = courses.filter(course => {
    const matchesGrade = selectedGrade ? course.grade === selectedGrade : true;
    const matchesSubject = selectedSubject ? course.subject_id === selectedSubject : true;
    const matchesPrice = selectedPrice ? course.price === selectedPrice : true;
    return matchesGrade && matchesSubject && matchesPrice;
  });
  
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <div className="w-vw min-h-lvh lg:py-8 py-4 lg:px-15 px-3">
      <div className="mx-auto max-w-6xl px-4 flex flex-col ">
        <StartSection
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          results={filteredCourses.length}
          filters={[selectedGrade, selectedSubject].filter(Boolean).length}
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
                prices={prices}
                selectedGrade={selectedGrade}
                setSelectedGrade={setSelectedGrade}
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
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
                  prices={prices}
                  selectedGrade={selectedGrade}
                  setSelectedGrade={setSelectedGrade}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
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
                <CourseCard course={course} subject={subjects.find((subject) => subject.id === course.subject_id)}/>
              ))}
            </div>
            <div className="col-span-full h-20 flex items-center justify-center mx-2">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredCourses.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
