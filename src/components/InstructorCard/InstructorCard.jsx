import React from 'react'
import { Star, UsersRound, CirclePlay } from 'lucide-react';
import { useNavigate } from 'react-router';

function InstructorCard({instructor}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/instructor-profile/${instructor.id}`);
    };

  return (
    <div className='w-full h-fit border border-gray-200 flex items-start py-2 px-1'>
        <div className='w-1/4 p-4'>
            <img src={`../../../${instructor?.avatar}`} alt="instructor1" width={120} height={120} className='rounded-full'/>
        </div>
        <div className='w-3/4 flex flex-col p-2'>
            <h3 className='text-dark font-semibold text-lg'>{instructor?.name}</h3>
            <p className='text-light text-sm'>{instructor?.title}</p>
            <div className='flex justify-start lg:gap-7 py-2 flex-wrap gap-3'>
                <div className='flex gap-1 items-center'>
                    <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
                    <span className='text-dark font-semibold'>{instructor?.rating}</span>
                    <span className='text-light text-xs'>Course rating</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <UsersRound size={16} color='#564FFD'/>
                    <span className='text-dark font-semibold'>{instructor?.students}</span>
                    <span className='text-light text-xs'>Students</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <CirclePlay size={16} color='#FF6636'/>
                    <span className='text-dark font-semibold'>{instructor?.numberOfCourses}</span>
                    <span className='text-light text-xs'>Courses</span>
                </div>
            </div>
            <div className='text-light text-sm'>
                {instructor?.bio}
                <br/>
                <span className='hover:text-dark cursor-pointer' onClick={handleClick}>READ MORE</span>
            </div>
        </div>
    </div>
  )
}

export default InstructorCard