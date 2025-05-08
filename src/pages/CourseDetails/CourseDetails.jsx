import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Loader, ArrowRight } from 'lucide-react'

import CourseData from '../../components/CourseData/CourseData'
import CourseDetailsCard from '../../components/CourseDetailsCard/CourseDetailsCard'
import SmallCourseCard from '../../components/SmallCourseCard/SmallCourseCard'
// import { getRelatedCourses } from '../../api/courses'

function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  // const [relatedCourses, setRelatedCourses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`https://rat-intent-hideously.ngrok-free.app/api/courses/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': true,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const data = await response.json()
      setCourse(data)
    }

    fetchCourse()
  }, [id])

  console.log(course)

  // useEffect(() => {
  //   const fetchRelatedCourses = async () => {
  //     const response = await getRelatedCourses()
  //     setRelatedCourses(response.data)
  //   }

  //   fetchRelatedCourses()
  // }, [])

  if (!course) return <div className='p-8 text-center'>Loading...</div>

  return (
    <div className='w-vw min-h-lvh'>
      <div className='grid grid-cols-1 lg:grid-cols-5'>
        <div className='lg:col-span-3 flex flex-col gap-4'>
          <CourseData course={course} />

          <div className='flex flex-col gap-4 w-full items-center lg:pl-27 px-4 pb-8'>
            <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
              <h2 className='text-dark font-semibold text-2xl py-2'>Course Info</h2>
              <p><strong>Category:</strong> {course.category}</p>
              <p><strong>Price:</strong> ${course.price}</p>
              <p><strong>Rating:</strong> {course.rate}/5</p>
              <p><strong>Enrolled Students:</strong> {course.enrolledStudents.length}</p>
              <p><strong>Lessons:</strong> {course.lessons.length}</p>
              <p><strong>Quizzes:</strong> {course.quizzes.length}</p>
            </div>

            {course.materials.length > 0 && (
              <div className='flex flex-col gap-3 mt-6 w-full'>
                <h2 className='text-dark font-semibold text-xl'>Course Materials</h2>
                {course.materials.map((material, index) => (
                  <a
                    key={index}
                    href={material}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary underline text-sm'
                  >
                    📄 Material {index + 1}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-center'>
          <CourseDetailsCard course={course} />
        </div>
      </div>

      {/* Related Courses Section */}
      <div className='w-full'>
        <div className='max-w-screen-xl my-3'>
          <hr className='border-[1.3px] border-gray-200' />
          <div className='flex justify-center items-center bg-secondary w-fit top-[-15px] relative ml-27 py-2.5 px-8 gap-2 cursor-pointer'>
            <span className=' text-primary text-md font-semibold'>Load More</span>
            <Loader className='text-primary mt-1' size={20} />
          </div>
          <div className='md:px-27 px-7 py-7 flex flex-col gap-6'>
            <div className='flex gap-3 justify-between items-start'>
              <span className='text-primary text-4xl font-semibold'>Related Courses</span>
              <div
                className='flex justify-center items-center bg-secondary w-fit py-2.5 px-3 lg:px-8 gap-2 cursor-pointer'
                onClick={() => navigate('/courses')}
              >
                <span className=' text-primary text-md font-semibold hidden md:block'>View All</span>
                <ArrowRight className='text-primary mt-1' size={20} />
              </div>
            </div>

            {/* <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>
              {relatedCourses.map((course) => (
                <SmallCourseCard key={course._id} course={course} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
