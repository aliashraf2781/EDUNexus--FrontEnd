import React, { useEffect, useState } from "react";
import StartSection from "../../components/StartSection/StartSection";
import CourseCard from "../../components/CourseCard/CourseCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import Pagination from "../../components/Pagination/Pagination";
import SideFilterMenu from "../../components/SideFilterMenu/SideFilterMenu";
import { getAllCourses, getAllCategories, getCourseLevels, getTools, getPrices } from "../../api/courses";

function CourseList() {
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [courseLevels, setCourseLevels] = useState([]);
  const [tools, setTools] = useState([]);
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const allCourses = await getAllCourses();
      setCourses(allCourses.data);
      const allCategories = await getAllCategories();
      setCategories(allCategories.data);
      const allCourseLevels = await getCourseLevels();
      setCourseLevels(allCourseLevels.data);
      const allTools = await getTools();
      setTools(allTools.data);
      const allPrices = await getPrices();
      setPrices(allPrices.data);
    };
    fetchData();
  }, []);

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-vw min-h-lvh lg:py-8 py-4 lg:px-15 px-3">
      <div className="mx-auto max-w-6xl px-4 flex flex-col ">
        <StartSection
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
        <div className="grid grid-cols-12 gap-6">
          {showFilters && (
            <div className="lg:col-span-3">
              <div className="hidden lg:block">
                <FilterSection
                  showFilters={showFilters}
                  setShowFilters={setShowFilters}
                  categories={categories}
                  courseLevels={courseLevels}
                  tools={tools}
                  prices={prices}
                />
              </div>
              <SideFilterMenu
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              >
                <FilterSection
                  showFilters={showFilters}
                  setShowFilters={setShowFilters}
                  categories={categories}
                  courseLevels={courseLevels}
                  tools={tools}
                  prices={prices}
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
                <CourseCard course={course} />
              ))}
            </div>
            <div className="col-span-full h-20 flex items-center justify-center mx-2">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={courses.length}
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
