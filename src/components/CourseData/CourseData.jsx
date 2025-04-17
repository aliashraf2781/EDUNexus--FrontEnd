import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import createdBy1  from '../../assets/courses images/createdBy1.png';
import createdBy2  from '../../assets/courses images/createdBy2.png';

function CourseData() {
  return (
      <div className='w-full h-fit bg-gray-100 lg:pl-27 px-7 pt-15 flex flex-1 flex-col gap-4 py-4 pr-4'>
        <div className='text-light text-sm flex gap-2 items-center'>
          <span className='cursor-pointer text-light hover:text-dark text-sm'>Home</span>
          <ChevronRight size={15} className='text-light mt-1' />
          <span className='cursor-pointer text-light hover:text-dark text-sm'>Development</span>
          <ChevronRight size={15} className='text-light mt-1' />
          <span className='cursor-pointer text-light hover:text-dark text-sm'>Web Development</span>
          <ChevronRight size={15} className='text-light mt-1' />
          <span className='cursor-pointer text-light hover:text-dark text-sm'>Webflow</span>
        </div>
        <div className='text-dark text-2xl font-semibold'>
          Complete Website Responsive Design: from Figma to Webflow to Website Design
        </div>
        <div className='text-light text-md'>
          3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-between items-center w-full'>
          <div className='flex gap-2 items-center'>
            <div className="w-9 h-9 rounded-full relative">
              <img src={createdBy2} alt="Avatar 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full relative ml-[-20px]">
              <img src={createdBy1} alt="Avatar 2" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col justify-between'>
              <span className='text-light text-sm'>Created by:</span>
              <span className='text-dark text-sm'>Dianne Russell • Kristin Watson</span>
            </div>
          </div>
          <div className='flex items-center'>
            <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
            <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
            <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
            <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
            <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
            <span className='text-dark font-semibold text-sm ml-2'>4.8</span>
            <span className='text-light text-sm ml-2'>(412,453 Rating)</span>
          </div>
        </div>
      </div>
  )
}

export default CourseData