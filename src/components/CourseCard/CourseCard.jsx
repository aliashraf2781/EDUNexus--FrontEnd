import React from 'react'
import { Star, UserRound, Heart } from 'lucide-react'
import { useNavigate } from 'react-router';
import { useFavorites } from '../../context/FavoriteContext';

function CourseCard({ course }) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/course-details/${course.id}`);
    };

  return (
    <div className='h-fit cursor-pointer w-[270px] border-[1.5px] border-[#E9EAF0]' onClick={handleClick}>
        <div className=" h-[200px] relative">
            <img src={course.thumbnail} alt='Course Image' className="absolute top-0 left-0 w-full h-full object-cover"/>
            <div 
                onClick={(e) => { e.stopPropagation(); toggleFavorite(course); }}
                className="absolute top-2 right-2 cursor-pointer w-9 h-9 rounded-full bg-white flex items-center justify-center">
                {isFavorite(course.id) ? (
                    <Heart size={22} color='red' fill='red' />
                ) : (
                    <Heart size={22} color='gray' />
                )}
            </div>
        </div>
        <div className='flex flex-col h-[180px]'>
            <div className='px-4 py-4 flex flex-col gap-3 h-[130px]'>
                <div className='flex justify-between'>
                    <div className={`text-[12px] px-2 py-1 font-semibold
                        ${course.category === 'Science' ? 'bg-secondary text-[#993D20]' : ''}
                        ${course.category === 'Physics' ? 'bg-blue-100 text-blue-800' : ''}
                        ${course.category === 'Mathematics' ? 'bg-green-100 text-green-800' : ''}
                        ${course.category === 'English' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${course.category === 'Psychology and Sociology' ? 'bg-purple-100 text-purple-800' : ''}`
                    }>
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
                    <h2 className='text-[16px] font-semibold text-gray-700'>{course.rate}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <UserRound size={20} color='#FF6636'/>
                    <h2 className='text-[15px] font-semibold text-gray-700'>{course.enrolledStudents.length}</h2>
                    <h2 className='text-[15px] text-gray-600'>Students</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard