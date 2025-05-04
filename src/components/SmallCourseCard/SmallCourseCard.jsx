import React from 'react'
import { Star} from 'lucide-react'
import { useNavigate } from 'react-router';

function CourseCard({ course, subject }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/course-details/${course.id}`);
    };

  return (
    <div className='w-auto cursor-pointer border-[1.5px] border-[#E9EAF0]' onClick={handleClick}>
        <div className="h-[120px] relative">
            <img src={`../../../${course?.image_url}`} alt='Course Image' width={270} height={230} className='object-cover h-full w-full'/>
        </div>
        <div className='flex flex-col h-[160px]'>
            <div className='px-4 py-4 flex flex-col gap-3 h-[130px]'>
                <div className='flex justify-between'>
                    <div className={`md:text-[10px] text-[8px] px-2 flex items-center justify-center font-semibold
                        ${course?.subject_id == 1 ? 'bg-secondary text-[#993D20]' : ''}
                        ${course?.subject_id == 2 ? 'bg-blue-100 text-blue-800' : ''}
                        ${course?.subject_id == 3 ? 'bg-green-100 text-green-800' : ''}
                        ${course?.subject_id == 4 ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${course?.subject_id == 5 ? 'bg-purple-100 text-purple-800' : ''}
                        ${course?.subject_id == 6 ? 'bg-red-100 text-red-800' : ''}
                        ${course?.subject_id == 7 ? 'bg-orange-100 text-orange-800' : ''}
                        ${course?.subject_id == 8 ? 'bg-emerald-100 text-emerald-800' : ''}
                        ${course?.subject_id == 9 ? 'bg-pink-100 text-pink-800' : ''}
                        ${course?.subject_id == 10 ? 'bg-cyan-100 text-cyan-800' : ''}
                        ${course?.subject_id == 11 ? 'bg-indigo-100 text-indigo-800' : ''}
                        ${course?.subject_id == 12 ? 'bg-lime-100 text-lime-800' : ''}
                        ${course?.subject_id == 13 ? 'bg-teal-100 text-teal-800' : ''}`}>
                        {subject}
                    </div>
                    <div className='text-lg text-[#3258B4] font-semibold'>
                        ${course?.price}
                    </div>
                </div>
                <p className='text-md leading-tight font-semibold text-dark line-clamp-3'>
                    {course?.title}
                </p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between items-center px-3 md:py-3 py-1 border-t-[1.5px] border-[#E9EAF0]'>
                <div className='flex items-center gap-1'>
                    <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                    <h2 className='text-[13px] font-semibold text-gray-700'>{course?.rating}</h2>
                </div>
                <div className='flex items-center gap-1'>
                    <h2 className='text-[13px] font-semibold text-gray-700'>{course?.students}</h2>
                    <h2 className='text-[13px] text-gray-600'>Students</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard