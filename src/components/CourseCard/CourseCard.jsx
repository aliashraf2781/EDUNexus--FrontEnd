import React from 'react'
import { Star, UserRound } from 'lucide-react'

 const handleClick = () => {
    // Navigate to the new page and send course details as state
    // navigate(`/course/${course.id}`, { state: { course } });
  };

function CourseCard({ course }) {
  return (
    <div className='w-auto cursor-pointer border-[1.5px] border-[#E9EAF0]' onClick={handleClick}>
        <img src={course.image} alt='Course Image' width={270} height={230} className='object-cover w-full'/>
        <div className='flex flex-col h-[180px]'>
            <div className='px-4 py-4 flex flex-col gap-3 h-[130px]'>
                <div className='flex justify-between'>
                    <div className={`text-[12px] px-2 py-1 font-semibold
                        ${course.category === 'DESIGN' ? 'bg-secondary text-[#993D20]' : ''}
                        ${course.category === 'DEVELOPMENTS' ? 'bg-gray-100 text-[#342F98]' : ''}
                        ${course.category === 'BUSINESS' ? 'bg-[#E1F7E3] text-[#15711F]' : ''}
                        ${course.category === 'MARKETING' ? 'bg-gray-200 text-[#ff8235]' : ''}
                        ${course.category === 'IT & SOFTWARE' ? 'bg-gray-100 text-[#dc0e0e]' : ''}`}>
                        {course.category}
                    </div>
                    <div className='text-xl text-[#3258B4] font-semibold'>
                        ${course.price}
                    </div>
                </div>
                <p className='text-lg leading-tight font-semibold text-dark'>
                    {course.title}
                </p>
            </div>
            <div className='flex justify-between items-center px-3 py-3 border-t-[1.5px] border-[#E9EAF0]'>
                <div className='flex items-center gap-2'>
                    <Star size={19} color='#FD8E1F' fill='#FD8E1F'/>
                    <h2 className='text-[16px] font-semibold text-gray-700'>{course.rating}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <UserRound size={20} color='#FF6636'/>
                    <h2 className='text-[15px] font-semibold text-gray-700'>{course.students}</h2>
                    <h2 className='text-[15px] text-gray-600'>Students</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard