import React, { useEffect, useState } from 'react'
import StartSection from '../components/StartSection/StartSection'
import CourseCard from '../components/CourseCard/CourseCard'
import FilterSection from '../components/FilterSection/FilterSection'
import Pagination from '../components/Pagination/Pagination'

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

export default CourseList