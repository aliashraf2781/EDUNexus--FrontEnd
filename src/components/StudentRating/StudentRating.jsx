import React from 'react'
import { Star } from 'lucide-react'

function StudentRating({student}) {
  return (
    <div className='flex h-fit py-3 gap-2 border-b-[1.4px] border-gray-200'>
      <div className='flex items-start justify-center'>
        <img src={`../../../${student.image}`} alt="avatar" width={45} height={45} className='rounded-full'/>
      </div>
      <div className='flex flex-col ml-3 w-full gap-2'>
        <div className='flex items-center gap-2'>
          <span className='text-dark text-md font-semibold '>{student.name}</span>
          <span className='text-gray-600 text-[15px] font-normal mt-1'>•</span>
          <span className='text-gray-600 text-[13px] font-normal mt-1'>{student.date}</span>
        </div>
        <div className='flex items-center gap-0.5'>
          <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
          <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
          <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
          <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
          <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
        </div>
        <div className='text-gray-600 text-[14px] font-normal'>
          {student.comment}
        </div>
      </div>
    </div>
  )
}

export default StudentRating