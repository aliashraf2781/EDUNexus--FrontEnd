import React from 'react'
import { Star} from 'lucide-react'
import { useNavigate } from 'react-router';

function CourseCard({ course }) {
    const navigate = useNavigate();
        const handleClick = () => {
            navigate(`/course-details/${course.id}`);
        };

  return (
    <div className='w-auto cursor-pointer border-[1.5px] border-[#E9EAF0]' onClick={handleClick}>
        <img src={`../../../${course.image}`} alt='Course Image' width={270} height={230} className='object-cover w-full'/>
        <div className='flex flex-col h-[180px]'>
            <div className='px-4 py-4 flex flex-col gap-3 h-[130px]'>
                <div className='flex justify-between'>
                    <div className={`md:text-[10px] text-[8px] px-2 flex items-center justify-center font-semibold
                        ${course.category === 'DESIGN' ? 'bg-secondary text-[#993D20]' : ''}
                        ${course.category === 'DEVELOPMENTS' ? 'bg-gray-100 text-[#342F98]' : ''}
                        ${course.category === 'BUSINESS' ? 'bg-[#E1F7E3] text-[#15711F]' : ''}
                        ${course.category === 'MARKETING' ? 'bg-gray-200 text-[#ff8235]' : ''}
                        ${course.category === 'IT & SOFTWARE' ? 'bg-gray-100 text-[#dc0e0e]' : ''}`}>
                        {course.category}
                    </div>
                    <div className='text-lg text-[#3258B4] font-semibold'>
                        ${course.price}
                    </div>
                </div>
                <p className='text-md leading-tight font-semibold text-dark line-clamp-3'>
                    {course.title}
                </p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between items-center px-3 md:py-3 py-1 border-t-[1.5px] border-[#E9EAF0]'>
                <div className='flex items-center gap-1'>
                    <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                    <h2 className='text-[13px] font-semibold text-gray-700'>{course.rating}</h2>
                </div>
                <div className='flex items-center gap-1'>
                    <h2 className='text-[13px] font-semibold text-gray-700'>{course.students}</h2>
                    <h2 className='text-[13px] text-gray-600'>Students</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard