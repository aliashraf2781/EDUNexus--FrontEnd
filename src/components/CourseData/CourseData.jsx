import React from 'react'
import { ChevronRight, Star } from 'lucide-react'

function CourseData({ course }) {
  return (
    <div className='w-full h-fit bg-gray-100 lg:pl-27 px-7 pt-15 flex flex-1 flex-col gap-4 py-4 pr-4'>
      <div className='text-light text-sm flex gap-2 items-center'>
        <span className='cursor-pointer text-light hover:text-dark text-sm'>Home</span>
        <ChevronRight size={15} className='text-light mt-1' />
        <span className='cursor-pointer text-light hover:text-dark text-sm'>{course.category}</span>
      </div>
      <div className='text-dark text-2xl font-semibold'>
        {course.title}
      </div>
      <div className='text-light text-md'>
        {course.description}
      </div>
      <div className='flex flex-col md:flex-row gap-2 justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
          <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            {course.createdBy?.slice(0, 2)}
          </div>
          <div className='flex flex-col justify-between'>
            <span className='text-light text-sm'>Created by:</span>
            <span className='text-dark text-sm'>{course.createdBy}</span>
          </div>
        </div>
        <div className='flex items-center'>
          {[...Array(course.rate)].map((_, i) => (
            <Star key={i} size={16} color='#FD8E1F' fill='#FD8E1F'/>
          ))}
          <span className='text-dark font-semibold text-sm ml-2'>{course.rate}.0</span>
          <span className='text-light text-sm ml-2'>({course.enrolledStudents.length} Ratings)</span>
        </div>
      </div>
    </div>
  )
}

export default CourseData
