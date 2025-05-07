import React from 'react'
import {ArrowRight} from 'lucide-react'

function trailer({course}) {
  return (
    <div className='flex flex-col'>
      <img src={`../../../${course[0].image}`} alt="tailor" width={300} height={200} className='w-full' />
      <div className='flex justify-between items-center w-full border-b border-gray-200 h-10 text-sm mt-4 cursor-pointer'>
        <div className='text-dark border-b-3 border-[#4484E3] h-full flex pb-4 w-1/4 justify-center font-semibold'>Overview</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Curriculum</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Instructor</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Review</div>
      </div>
      <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-sm'>
        <h2 className='text-dark font-semibold text-2xl py-4'>Description</h2>
        <p>
          {course[0].longDescription}
        </p>
      </div>
      <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
        <h2 className='text-dark font-semibold text-2xl py-2'>Who this course is for:</h2>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>This course is for those who want to launch a Freelance Web Design career.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Praesent eget consequat elit. Duis a pretium purus.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
        <h2 className='text-dark font-semibold text-2xl py-2'>Course requirements</h2>
        <ul className='list-disc pl-5 text-sm/relaxed'>
          <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
          <li>Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.</li>
          <li>Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.</li>
          <li>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</li>
          <li>Praesent eget consequat elit. Duis a pretium purus.</li>
          <li>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.</li>
          <li>This course is for those who want to launch a Freelance Web Design career.</li>
        </ul>
      </div>
    </div>
    
  )
}

export default trailer