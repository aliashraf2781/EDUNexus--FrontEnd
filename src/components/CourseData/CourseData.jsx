import React from 'react'
import { ChevronRight, Star } from 'lucide-react'

function CourseData({course, subject, instructor}) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} color="#FD8E1F" fill="#FD8E1F" />);
    }
    if (hasHalf) {
      stars.push(
        <div className="relative w-[15px] h-[15px] inline-block">
          <Star size={15} color="#FD8E1F" fill="transparent" />
          <Star
            size={15}
            color="#FD8E1F"
            fill="#FD8E1F"
            className="absolute top-0 left-0"
            style={{
              clipPath: "inset(0 50% 0 0)",
            }}
          />
        </div>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#FD8E1F" fill="none" />);
    }
    return stars;
  };
  return (
      <div className='w-full h-fit bg-gray-100 lg:pl-27 px-7 pt-15 flex flex-1 flex-col gap-4 py-4 pr-4'>
        <div className='text-light text-sm flex gap-2 items-center'>
          <span className='cursor-pointer text-light hover:text-dark text-sm'>Home</span>
          <ChevronRight size={15} className='text-light mt-1' />
          <span className='cursor-pointer text-light hover:text-dark text-sm'>{subject}</span>
        </div>
        <div className='text-dark text-2xl font-semibold'>
          {course[0].title}
        </div>
        <div className='text-light text-md'>
          {course[0].shortDescription}
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-between items-center w-full'>
          <div className='flex gap-2 items-center'>
            <div className="w-9 h-9 rounded-full relative">
              <img src={`../../../${instructor?.avatar}`} alt="Avatar 1" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className='flex flex-col justify-between'>
              <span className='text-light text-sm'>Created by:</span>
              <span className='text-dark text-sm'>{instructor?.name}</span>
            </div>
          </div>
          <div className='flex items-center'>
            {renderStars(course[0]?.rating)}
            <span className='text-dark font-semibold text-sm ml-2'>{course[0]?.rating}</span>
            <span className='text-light text-sm ml-2'>({instructor?.students} Students)</span>
          </div>
        </div>
      </div>
  )
}

export default CourseData