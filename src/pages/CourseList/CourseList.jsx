<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import StartSection from '../../components/StartSection/StartSection'
import CourseCard from '../../components/CourseCard/CourseCard'
import FilterSection from '../../components/FilterSection/FilterSection'
import Pagination from '../../components/Pagination/Pagination'
import SideFilterMenu from '../../components/SideFilterMenu/SideFilterMenu'

function CourseList() {
  const [showFilters, setShowFilters] = useState(false)
  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])
  const [courseLevels, setCourseLevels] = useState([])
  const [tools, setTools] = useState([])
  const [prices, setPrices] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const coursesResponse = await fetch('http://localhost:3001/courses')
      const categoriesResponse = await fetch('http://localhost:3001/categories')
      const courseLevelsResponse = await fetch('http://localhost:3001/courseLevels')
      const toolsResponse = await fetch('http://localhost:3001/tools')
      const pricesResponse = await fetch('http://localhost:3001/prices')
      const coursesData = await coursesResponse.json()
      const categoriesData = await categoriesResponse.json()
      const courseLevelsData = await courseLevelsResponse.json()
      const toolsData = await toolsResponse.json()
      const pricesData = await pricesResponse.json()
      setCourses(coursesData)
      setCategories(categoriesData)
      setCourseLevels(courseLevelsData)
      setTools(toolsData)
      setPrices(pricesData)
    }
    fetchData()
  }, [])
  return (
    <div className='w-vw min-h-lvh lg:py-8 py-4 lg:px-15 px-3'>
      <div className='mx-auto max-w-6xl px-4 flex flex-col '>
        <StartSection showFilters={showFilters} setShowFilters={setShowFilters} />
        <div className='grid grid-cols-12 gap-6'>
          {showFilters && (
            <div className='lg:col-span-3'>
              <div className='hidden lg:block'>
                <FilterSection 
                  showFilters={showFilters} 
                  setShowFilters={setShowFilters} 
                  categories={categories} 
                  courseLevels={courseLevels}
                  tools={tools}
                  prices={prices}
                />
              </div>
              <SideFilterMenu showFilters={showFilters} setShowFilters={setShowFilters}>
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

          <div className={`grid col-span-12 
              ${showFilters 
                ? 'lg:col-span-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ' 
                : 'lg:col-span-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}> 
            <div className={`grid col-span-12 gap-4
              ${showFilters 
                ? 'lg:col-span-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ' 
                : 'lg:col-span-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
              {courses.map((course) => (
                <CourseCard course={course}/>
              ))}
            </div>
            <div className='col-span-full h-20 flex items-center justify-center mx-2'>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

=======
import React, { useEffect, useState } from 'react'
import StartSection from '../../components/StartSection/StartSection'
import CourseCard from '../../components/CourseCard/CourseCard'
import FilterSection from '../../components/FilterSection/FilterSection'
import Pagination from '../../components/Pagination/Pagination'

function CourseList() {
  const [showFilters, setShowFilters] = useState(false)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3002/courses')
      const data = await response.json()
      setCourses(data)
    }
    fetchData()
  }, [])
  return (
    <div className='w-vw min-h-lvh py-8 px-15'>
      <div className='container mx-auto max-w-6xl px-4'>
        <StartSection showFilters={showFilters} setShowFilters={setShowFilters} />
        <div className='grid lg:grid-cols-12 gap-6'>
          {showFilters && (
            <div className='lg:col-span-3'>
            <FilterSection showFilters={showFilters} setShowFilters={setShowFilters} />
          </div>
          )}

          <div className={`grid 
              ${showFilters 
                ? 'md:col-span-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'md:col-span-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}> 
            <div className={`grid gap-4 
              ${showFilters 
                ? 'md:col-span-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'md:col-span-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
              {courses.map((course) => (
                <CourseCard key={course.id} course={course}/>
              ))}
            </div>
            <div className='col-span-full h-20 flex items-center justify-center'>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

>>>>>>> 6ff3aac694df0170e8308a15a93315e91af27016
export default CourseList